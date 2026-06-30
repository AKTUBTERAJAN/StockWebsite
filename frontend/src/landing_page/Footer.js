import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
    return (
    <footer className='border-top' style={{backgroundColor:"#FBFBFB"}} >
    
        <div className='container  mt-5'style={{color:"#424242",fontSize:"14px"}}>
            <div className='row mt-5'>
                <div className='col'>
                    <img src='media/logo.png' alt='Logo' style={{width:"50px"}}/>
                    <p>&copy; 2026 , Not TradePath Broking Ltd. All rights reserved.</p>

                    <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", marginRight: "20px"   }}>
                        <i className="fa fa-envelope" aria-hidden="true"   style={{ fontSize: "15px" }}></i>
                    </a>
                    <a href="https://www.youtube.com/@UPHUB369/videos" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" ,marginRight: "20px" }}>
                        <i className="fa fa-youtube-play"  style={{ fontSize: "15px" }}></i>
                    </a>
                    <a href="https://www.facebook.com/rajan.kushwaha.5836" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" ,marginRight: "20px" }}>
                        <i class="fa fa-facebook-square" aria-hidden="true" style={{ fontSize: "15px" }}></i>
                    </a>
                     <a href="https://www.linkedin.com/in/uphub369/" target="_blank" rel="noopener noreferrer" style={{ color: "inherit",marginRight: "20px"  }}>
                        <i class="fa fa-linkedin-square" aria-hidden="true"  style={{ fontSize: "15px" }}></i>
                    </a>
                    <hr/>
                     <a href="https://www.instagram.com/uphub369/" target="_blank" rel="noopener noreferrer" style={{ color: "inherit",marginRight: "20px"  }}>
                      <i class="fa fa-instagram" aria-hidden="true"  style={{ fontSize: "15px" }}></i>
                    </a>
                     <a href="https://twitter.com/RAJANKU63374902" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" ,marginRight: "20px" }}>
                       <i class="fa fa-twitter-square" aria-hidden="true"  style={{ fontSize: "15px" }}></i>
                    </a>
                     <a href="https://web.telegram.org/a/" target="_blank" rel="noopener noreferrer" style={{ color: "inherit"  }}>
                      <i class="fa fa-telegram" aria-hidden="true"  style={{ fontSize: "15px" }}></i>
                    </a>
                    
                </div>
                <div className='col'>
                    <p>Campany</p>
                    <Link to='/about'className='text-muted' style={{textDecoration:"none"}}>About</Link><br/>
                    <Link to='/product' className='text-muted' style={{textDecoration:"none"}}>Products</Link><br/>
                    <Link to='/pricing'className='text-muted' style={{textDecoration:"none"}}>Pricing</Link><br/>
                    <Link to='/referral'className='text-muted' style={{textDecoration:"none"}}>Referral programme</Link><br/>
                    <Link to='/careers'className='text-muted' style={{textDecoration:"none"}}>Careers</Link><br/>
                    <Link to='/preshmedia'className='text-muted' style={{textDecoration:"none"}}>Presh & media</Link><br/>
                    
                </div>
                <div className='col'>
                    <p>Support</p>
                    <Link to='/contact'className='text-muted' style={{textDecoration:"none"}}>Contact</Link><br/>
                    <Link to='/support'className='text-muted' style={{textDecoration:"none"}}>Support portal</Link><br/>
                    <Link to='/tconect'className='text-muted' style={{textDecoration:"none"}}>T-connect blog</Link><br/>
                    <Link to='/chargeslist'className='text-muted' style={{textDecoration:"none"}}>List of charges</Link><br/>
                    <Link to='/downloadresorce'className='text-muted' style={{textDecoration:"none"}}>Downloads & resources</Link>
                    
                    
                </div>
                <div className='col'>
                    <p>Account</p>
                    <Link to='/Openaccount'className='text-muted' style={{textDecoration:"none"}}>Open an account</Link><br/>
                    <Link to='/fundtransfer'className='text-muted' style={{textDecoration:"none"}}>Fund transfer</Link><br/>
                    <Link to='/60daychallenge'className='text-muted' style={{textDecoration:"none"}}>60 day challenge</Link>
                    

                </div>
            </div>
            <div className='mt-5 text-muted'style={{fontSize:"10px"}}>
                <p>TradePath Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through TradePath Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: TradePath Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@tradepath.com, for DP related to dp@tradepath.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

                <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

                <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

                <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

                <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

                <p>India's largest broker based on networth as per NSE. NSE broker factsheet</p>

                <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of TradePath and offering such services, please create a ticket here.</p>

                <p>*Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.</p>
            </div>
            <div className='row mb-3'>
                <div className='col'></div>
                <div className='col'>
                    <a href='https://www.nseindia.com/'className='text-muted' style={{textDecoration:"none"}}>NSE</a><br/>

                </div>
                <div className='col'>
                    <a href='https://www.bseindia.com/sensex/code/16'className='text-muted' style={{textDecoration:"none"}}>BSE</a><br/>
                    </div>
                <div className='col'>
                    <a href='https://mcxlive.org/'className='text-muted' style={{textDecoration:"none"}}>MCX</a><br/>
                </div>
                <div className='col'>
                    <a href='https://legaldocs.co.in/terms-and-conditions-generator'className='text-muted' style={{textDecoration:"none",textWrap:"nowrap"}}>Terms & condition</a><br/>
                </div>
                <div className='col'>
                    <a href='/'className='text-muted' style={{textDecoration:"none",textWrap:"nowrap"}}>Policies & procedures </a><br/>
                </div>
                <div className='col'>
                    <a href='/'className='text-muted' style={{textDecoration:"none",textWrap:"nowrap"}}>Privacy policy</a><br/>
                </div>
                <div className='col'>
                    <a href='/'className='text-muted' style={{textDecoration:"none"}}>Disclosure</a><br/>
                </div>
                <div className='col'>
                    <a href='/'className='text-muted' style={{textDecoration:"none",textWrap:"nowrap"}}>For investor's attention </a><br/>
                </div>
                <div className='col'>
                    <a href='/'className='text-muted' style={{textDecoration:"none",textWrap:"nowrap"}}>Investor charter</a><br/>
                </div>
                <div className='col'></div>
                
            </div>
        </div>
        
    </footer> 
     );
}

export default Footer;
