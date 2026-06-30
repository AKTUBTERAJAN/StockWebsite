import React from 'react';
function Brokrage () {
    return ( 
        <div className='container p-5'style={{color:"#424242",fontSize:"14px"}}>
            <div className='row p-5 mt-2 border-top'>
                <div className='col-8 p-4'>
                    <a href='/' style={{textDecoration:'none'}}>
                    <h3 className='fs-5'>Brokrage Calculator</h3>
                    </a>
                    <ul style={{lineHeight:"2.5"}}>
                        <li>
                            Call & Trade and RMS auto-square-off: Addditional  charges of 50 + GST per order.
                        </li>
                        <li>
                            Digital contract notes will be sent via e-mail.
                        </li>
                        <li>
                            Pyhical contract notes will be sent via courier at a cost of 20 per contract note.Curier charges will be applicable as per the location of the client.
                        </li>
                        <li>
                            For NRI accounts(non-PIS), the brokerage will be 0.05% of the trade value or 100 per executed order for euity.
                        </li>
                        <li>
                            For NRI accounts(PIS), the brokerage will be 0.05% of the trade value or 200 per executed order for euity .
                        </li>
                        <li>
                            if the account in debit balance, any order place will be charged 40 per order.
                        </li>
                    </ul>
                </div>
                <div className='col-4 p-4'>
                    <a href='/' style={{textDecoration:'none'}}>
                    <h3 className='fs-5'>List of charges</h3>
                    </a>
                </div>
                    
            </div>
                
        </div>
     );
}

export default Brokrage;