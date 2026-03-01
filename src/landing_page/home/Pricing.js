import React from 'react';
function Pricing() {
    return (  
        <div className='container mb-5'style={{color:"#424242"}}>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-3 fs-3'>Unbeatable pricing</h1>
                    <p> We pioneered the concept Of discount broking and 
                        price transparency in India. flat fees and no hidden charges. </p>
                    <a href=''className='p-3' style={{textDecoration:"none"}}>See pricing 
                        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>
                <div className='col-2'></div>
                <div className='col-6 mb-5'>
                    <div className='row text-center'>
                        <div className='col p-3 border'>
                            <h1 className='mb-3'><i class="fa fa-inr" aria-hidden="true"></i>0</h1>
                            <p>free equiry delivery and <br/>direct mutual funds</p>
                        </div>
                        <div className='col p-3 border'>
                            <h1 className='mb-3'><i class="fa fa-inr" aria-hidden="true"></i>20</h1>
                            <p >Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;