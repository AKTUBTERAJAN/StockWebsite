import React from 'react';
import ReactDOM from 'react-dom/client';
import{BrowserRouter,Route,Routes} from 'react-router-dom';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import Signup from "./landing_page/signup/signup";
import AboutePage from "./landing_page/about/About";
import ProductPage from "./landing_page/product/Product";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/Support";
import Contacts from "./landing_page/Contact/Contacts";
import Daychallenge from "./landing_page/60daychallenge/Daychallenge";
import Careers from "./landing_page/Careers/Careers";
import Referral from "./landing_page/Referral/Referral";
import Preshmedia from "./landing_page/Preshmedia/Preshmedia"
import Tconect from "./landing_page/Tconect/Tconect"
import Chargeslist from "./landing_page/Chargeslist/Chargeslist"
import Downloadresorce from "./landing_page/Downloadresorce/Downloadresorce"
import Openaccount from "./landing_page/Openaccount/Openaccount"
import Fundtransfer from "./landing_page/Fundtransfer/Fundtransfer"
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/about" element={<AboutePage/>}/>
          <Route path="/product" element={<ProductPage/>}/>
          <Route path="/pricing" element={<PricingPage/>}/>
          <Route path="/support" element={<SupportPage/>}/>
          <Route path="/contact" element={<Contacts/>}/>
          <Route path="/60daychallenge" element={<Daychallenge/>}/>
          <Route path="/careers" element={<Careers/>}/>
          <Route path="/referral" element={<Referral/>}/>
          <Route path="/preshmedia" element={<Preshmedia/>}/>
          <Route path="/tconect" element={<Tconect/>}/>
          <Route path="/chargeslist" element={<Chargeslist/>}/>
          <Route path="/downloadresorce" element={<Downloadresorce/>}/>
          <Route path="/Openaccount" element={<Openaccount/>}/>
          <Route path="/fundtransfer" element={<Fundtransfer/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
  </BrowserRouter>
);
