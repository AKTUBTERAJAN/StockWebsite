import React from 'react';
function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/largestBroker.svg' alt='largestbroker'/>
                </div>
                <div className='col-6 p-5 mt-3'>
                    <h2 style={{color:"#424242",fontSize:"25px"}}>Largest stock broker in India</h2>
                    <p className='mb-5 fs-15 text-muted'>+2 millian TradePath clients contribute to over
                         15% of all volume in India daily by treding and investing in:</p>
                         <div className='row fs-15 text-muted'>
                            <div className='col-6 '>
                                <ul>
                                    <li>
                                        <p>Futures and Options</p>
                                    </li>
                                    <li>
                                        <p>Commodity derivatives</p>
                                    </li>
                                    <li>
                                        <p>Currency derivatives</p>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-6'>
                                <ul>
                                    <li>
                                        <p>Stocks & IOPs</p>
                                    </li>
                                    <li>
                                        <p>Drirect mutual funds</p>
                                    </li>
                                    <li>
                                        <p>Bonds and Govt. Securities</p>
                                    </li>
                                </ul>
                            </div>
                         </div>
                            <img src='media\pressLogos.png' alt='presslogo' style={{width:"80%"}}/>
                    
                </div>


            </div>
        </div>
     );
}

export default Awards;