require('dotenv').config();

const dns = require('node:dns');
const crypto = require('node:crypto');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');



const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
const JWT_SECRET = process.env.JWT_SECRET || 'change-this-secret-before-deployment';
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';
const DASHBOARD_URL = process.env.DASHBOARD_URL || 'http://localhost:3001';



const app = express();
app.use(cors({
      origin: [FRONTEND_URL, DASHBOARD_URL],
      credentials: true,
}));
app.use(bodyParser.json());

dns.setServers(['8.8.8.8', '1.1.1.1']);

//Open Account
const OpenAccount = require("./model/OpenAccountModel");
      // Save Contact Form
      app.post("/openaccount", async (req, res) => {
      console.log("New Entry:", req.body);

      try {
      const openaccount = new OpenAccount(req.body);
      await openaccount.save();

      console.log(" details Saved Successfully");

      res.status(201).json({
            success: true,
            message: "Account details saved successfully"
         
      });

      } catch (error) {
      console.log(error);

      res.status(500).json({
            success: false,
            message: error.message
      });
      }
      });

//Contacts us 
const Contact = require("./model/ContectModel");
      // Save Contact Form
      app.post("/contact", async (req, res) => {
      console.log("New Entry:", req.body);

      try {
      const contact = new Contact(req.body);

      await contact.save();

      console.log("Saved Successfully");

      res.status(201).json({
            success: true,
            message: "Message Saved Successfully"
      });

      } catch (error) {
      console.log(error);

      res.status(500).json({
            success: false,
            message: error.message
      });
      }
      });

//USER DATA
const UserModel = require('./model/UserModel');
const OrdersModel = require('./model/OrdersModel');

const base64UrlEncode = (value) => Buffer.from(value).toString('base64url');

const signToken = (user) => {
      const header = base64UrlEncode(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
      const payload = base64UrlEncode(JSON.stringify({
            id: user._id.toString(),
            email: user.email,
            exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24),
      }));
      const signature = crypto
            .createHmac('sha256', JWT_SECRET)
            .update(`${header}.${payload}`)
            .digest('base64url');

      return `${header}.${payload}.${signature}`;
};

const verifyToken = (token) => {
      try {
      const [header, payload, signature] = token.split('.');
      if (!header || !payload || !signature) return null;

      const expectedSignature = crypto
            .createHmac('sha256', JWT_SECRET)
            .update(`${header}.${payload}`)
            .digest('base64url');

      if (signature.length !== expectedSignature.length) return null;
      if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature))) {
            return null;
      }

      const decodedPayload = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
      if (decodedPayload.exp < Math.floor(Date.now() / 1000)) return null;

      return decodedPayload;
      } catch (_error) {
            return null;
      }
};

const hashPassword = (password, salt = crypto.randomBytes(16).toString('hex')) => {
      const hash = crypto.pbkdf2Sync(password, salt, 120000, 64, 'sha512').toString('hex');
      return `${salt}:${hash}`;
};

const verifyPassword = (password, storedPassword) => {
      const [salt, storedHash] = storedPassword.split(':');
      if (!salt || !storedHash) return false;

      const hash = hashPassword(password, salt).split(':')[1];
      if (hash.length !== storedHash.length) return false;
      return crypto.timingSafeEqual(Buffer.from(hash), Buffer.from(storedHash));
};

const sanitizeUser = (user) => ({
      id: user._id,
      name: user.name,
      email: user.email,
      username: user.username,
      mobilenumber: user.mobilenumber,
      dob: user.dob,
      createdAt: user.createdAt,
});

const requireAuth = async (req, res, next) => {
      const authHeader = req.headers.authorization || '';
      const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : '';
      const decoded = token ? verifyToken(token) : null;

      if (!decoded) {
            return res.status(401).json({ message: 'Please login again.' });
      }

      const user = await UserModel.findById(decoded.id);
      if (!user) {
            return res.status(401).json({ message: 'User account not found.' });
      }

      req.user = user;
      next();
};

app.get('/health', (_req, res) => {
      res.json({ status: 'ok' });
});

app.post('/auth/register', async (req, res) => {
      try {
            const { name, mobile, mobilenumber, dob, email, password, confirmPassword } = req.body;
            const normalizedEmail = String(email || '').trim().toLowerCase();
            const phoneNumber = String(mobile || mobilenumber || '').trim();

            if (!name || !phoneNumber || !dob || !normalizedEmail || !password) {
                  return res.status(400).json({ message: 'All fields are required.' });
            }

            if (password !== confirmPassword) {
                  return res.status(400).json({ message: 'Passwords do not match.' });
            }

            const existingUser = await UserModel.findOne({ email: normalizedEmail });
            if (existingUser) {
                  return res.status(409).json({ message: 'Email is already registered.' });
            }

            const user = await UserModel.create({
                  name: name.trim(),
                  username: normalizedEmail.split('@')[0],
                  email: normalizedEmail,
                  password: hashPassword(password),
                  mobilenumber: phoneNumber,
                  dob,
            });

            const token = signToken(user);
            res.status(201).json({ message: 'Account created successfully.', token, user: sanitizeUser(user) });
      } catch (error) {
            res.status(500).json({ message: 'Registration failed.', error: error.message });
      }
});

app.post('/auth/login', async (req, res) => {
      try {
            const { email, password } = req.body;
            const normalizedEmail = String(email || '').trim().toLowerCase();
            const user = await UserModel.findOne({ email: normalizedEmail });

            if (!user || !verifyPassword(password || '', user.password)) {
                  return res.status(401).json({ message: 'Invalid email or password.' });
            }

            const token = signToken(user);
            res.json({ message: 'Logged in successfully.', token, user: sanitizeUser(user) });
      } catch (error) {
            res.status(500).json({ message: 'Login failed.', error: error.message });
      }
});

app.get('/auth/me', requireAuth, (req, res) => {
      res.json({ user: sanitizeUser(req.user) });
});

app.post('/auth/logout', (_req, res) => {
      res.json({ message: 'Logged out successfully.' });
});

// app.get('/addOrders', async (req, res) => {
//     const tempOrders = [
//       {
//     name: "INFY",
//     price: 1555.45,
//     percent: "-1.60%",
//     isDown: true,
//   },
//   {
//     name: "ONGC",
//     price: 116.8,
//     percent: "-0.09%",
//     isDown: true,
//   },
//   {
//     name: "TCS",
//     price: 3194.8,
//     percent: "-0.25%",
//     isDown: true,
//   },
//   {
//     name: "KPITTECH",
//     price: 266.45,
//     percent: "3.54%",
//     isDown: false,
//   },
//   {
//     name: "QUICKHEAL",
//     price: 308.55,
//     percent: "-0.15%",
//     isDown: true,
//   },
//   {
//     name: "WIPRO",
//     price: 577.75,
//     percent: "0.32%",
//     isDown: false,
//   },
//   {
//     name: "M&M",
//     price: 779.8,
//     percent: "-0.01%",
//     isDown: true,
//   },
//   {
//     name: "RELIANCE",
//     price: 2112.4,
//     percent: "1.44%",
//     isDown: false,
//   },
//   {
//     name: "HUL",
//     price: 512.4,
//     percent: "1.04%",
//     isDown: false,
//   },
//     ];
    
//     tempOrders.forEach((item) => {
//       const newOrders = new OrdersModel({
//        name: item.name,
//       qty: item.qty,
//       price: item.price,
//       mode: item.mode,
//       });
//       newOrders.save();
//     });
//     res.send('Orders added');
// });

const PositionsModel = require('./model/PositionsModel');

//  app.get('/addPositions', async (req, res) => {
//      const tempPositions = [
//        {
//          product: "CNC",
//          name: "EVEREADY",
//          qty: 2,
//          avg: 316.27,
//          price: 312.35,
//          net: "+0.58%",
//          day: "-1.24%",
//          isLoss: true,
//        },
//        {
//          product: "CNC",
//          name: "JUBLFOOD",
//          qty: 1,
//          avg: 3124.75,
//          price: 3082.65,
//          net: "+10.04%",
//          day: "-1.35%",
//          isLoss: true,
//        },
//      ];
    
//      tempPositions.forEach((item) => {
//        const newPosition = new PositionsModel({
//          product: item.product,
//          name: item.name,
//          qty: item.qty,
//          avg: item.avg,
//          price: item.price,
//          net: item.net,
//          day: item.day,
//          isLoss: item.isLoss,
//        });
//        newPosition.save();
//      });
//      res.send('Positions added');
//  });

const HoldingsModel = require('./model/HoldingsModel');

//  app.get('/addHoldings', async(req, res) => {
//    let tempHoldings= [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//     price: 541.15,
//      net: "+0.58%",
//      day: "+2.99%",
//    },
//    {
//      name: "HDFCBANK",
//      qty: 2,
//      avg: 1383.4,
//      price: 1522.35,
//      net: "+10.04%",
//       day: "+0.11%",
//   },
//     {
//      name: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//       price: 2417.4,
//      net: "+3.49%",
//           day: "+0.21%",
//    },
//          {

//       name: "INFY",
//       qty: 1,
//       avg: 1350.5,
//       price: 1555.45,
//       net: "+15.18%",
//       day: "-1.60%",
//       isLoss: true,
//     },
//     {
//       name: "ITC",
//       qty: 5,
//       avg: 202.0,
//       price: 207.9,
//       net: "+2.92%",
//       day: "+0.80%",
//     },
//     {
//       name: "KPITTECH",
//       qty: 5,
//       avg: 250.3,
//       price: 266.45,
//       net: "+6.45%",
//       day: "+3.54%",
//     },
//     {
//       name: "M&M",
//       qty: 2,
//       avg: 809.9,
//       price: 779.8,
//       net: "-3.72%",
//       day: "-0.01%",
//       isLoss: true,
//     },
//     {
//       name: "RELIANCE",
//       qty: 1,
//       avg: 2193.7,
//       price: 2112.4,
//       net: "-3.71%",
//       day: "+1.44%",
//     },
//     {
//       name: "SBIN",
//       qty: 4,
//       avg: 324.35,
//       price: 430.2,
//       net: "+32.63%",
//       day: "-0.34%",
//       isLoss: true,
//     },
//     {
//       name: "SGBMAY29",
//      qty: 2,
//       avg: 4727.0,
//       price: 4719.0,
//       net: "-0.17%",
//       day: "+0.15%",
//     },
//     {
//       name: "TATAPOWER",
//       qty: 5,
//       avg: 104.2,
//       price: 124.15,
//       net: "+19.15%",
//       day: "-0.24%",
//       isLoss: true,
//     },
//   ];

//    tempHoldings.forEach((item) => {
//        const newHolding = new HoldingsModel({
//          name: item.name,
//          qty: item.qty,
//          avg: item.avg,
//          price: item.price,
//          net: item.net,
//          day: item.day,
//        });
//        newHolding.save();
//    });
//     res.send('Holdings added');
//  });


app.get('/allHoldings', async (req, res) => {   //show database data in dashboard(create endpoint for allHoldings)
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get('/allPositions', async (req, res) => {   
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
      });

app.get('/allOrders', async (req, res) => {   
    const allOrders = await OrdersModel.find({});
    res.json(allOrders);
      });

app.post('/newOrder', async (req, res) => {
      try {
            const { name, qty, price, mode } = req.body;

            if (!name || Number(qty) <= 0 || Number(price) <= 0 || !mode) {
                  return res.status(400).json({ message: 'Invalid order details.' });
            }

            const newOrder = await OrdersModel.create({
                  name,
                  qty: Number(qty),
                  price: Number(price),
                  mode,
            });

            res.status(201).json(newOrder);
      } catch (error) {
            res.status(500).json({ message: 'Order save failed.', error: error.message });
      }
});

mongoose.connect(uri)
.then(() => {
    console.log("MongoDB Connected");

    app.listen(PORT, () => {
        console.log(`Server running on ${PORT}`);
    });
})
.catch((err) => {
    console.log(err);
});

