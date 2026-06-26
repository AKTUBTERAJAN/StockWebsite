import React from 'react';
import { Link } from 'react-router-dom';
function CreateTicket() {
    return ( 
         <div className='cantainer' style={{color:"#424242",fontSize:"14px"}}>
            <div className='row p-5 mb-5'>
                <h1 className='fs-2  mt-5  text-muted'>
                    To create a ticket, select a relevant topic.
                </h1>
                <div className='col-4 p-5 mt-2 '>
                    <h4><i class="fa fa-plus-circle" aria-hidden="true"></i>Account Opening </h4>
                    <p >
                        <Link to='/Openaccount' style={{textDecoration:"none",lineHeight:"2"}} >Online Account Opening</Link><br/>
                        <Link to='/Openaccount'style={{textDecoration:"none",lineHeight:"2"}} >offline Account Opening</Link><br/>
                        <a href="" style={{textDecoration:"none",lineHeight:"2"}} >Company, Partnership & HUF Account</a><br/>
                        <Link to='/Openaccount' style={{textDecoration:"none",lineHeight:"2"}} >Opening</Link><br/>
                        <Link to='/Openaccount' style={{textDecoration:"none",lineHeight:"2"}} >NRI Account Opening</Link><br/>
                        <a href="" style={{textDecoration:"none",lineHeight:"2"}} >Changes at TradePath </a><br/>
                        <a href="" style={{textDecoration:"none",lineHeight:"2"}} >Getting Started</a>
                        
                    </p>
                </div>
                <div className='col-4 p-5 mt-2'>
                    <h4><i class="fa fa-user" aria-hidden="true"></i>Your TradePath Account</h4>
                    <p >
                        <a href="" style={{textDecoration:"none",lineHeight:"2"}} >Login Credentials</a><br/>
                        <a href="" style={{textDecoration:"none",lineHeight:"2"}} >Account Modification and Segmentat Addition</a><br/>
                        <a href="" style={{textDecoration:"none",lineHeight:"2"}} >DP ID and bank details</a><br/>
                        <a href="" style={{textDecoration:"none",lineHeight:"2"}} >Your Profile</a><br/>
                        <a href="" style={{textDecoration:"none",lineHeight:"2"}} >Transfer and Conversion of shares</a><br/>
                        </p>
                </div>
                <div className='col-4 p-5 mt-2'>
                    <h4><i class="fa fa-bar-chart" aria-hidden="true"></i>Your TradePath Account</h4>
                    <p >
                        <a href="" style={{textDecoration:"none",lineHeight:"2"}} >Margin/Leverage,Product and Order Types</a><br/>
                        <a href="" style={{textDecoration:"none",lineHeight:"2"}} >Kite web and Mobile</a><br/>
                        <a href="" style={{textDecoration:"none",lineHeight:"2"}} >Trading FAQs</a><br/>
                        <a href="" style={{textDecoration:"none",lineHeight:"2"}} >Corporate Actions</a><br/>
                        <a href="" style={{textDecoration:"none",lineHeight:"2"}} >Sentinel</a><br/>
                        <a href="" style={{textDecoration:"none",lineHeight:"2"}} >Kite API </a><br/>
                        <a href="" style={{textDecoration:"none",lineHeight:"2"}} >Pi and other platforms</a><br/>
                        <a href="" style={{textDecoration:"none",lineHeight:"2"}} >Stockreports+</a><br/>
                        <a href="" style={{textDecoration:"none",lineHeight:"2"}} >GTT</a><br/>
                    </p>
                </div>
            </div>
        </div>
     );
}

export default CreateTicket;