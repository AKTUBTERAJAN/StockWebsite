import React from 'react';
function Education() {
    return ( 
        <div className='container mt-5'style={{color:"#424242"}}>
            <div className='row'>
                 <div className='col-6'>
                    <img src='media\education.svg' style={{width:"90%"}}></img>
                </div>
                <div className='col-6'>
                    <h2 className='mb-3 fs-3'>Free and open market education</h2>
                    <p> Varsity, the largest online stock education book in the world 
                        covering everything from the basics to advance trading. </p>
                    <a href=''className='p-3' style={{textDecoration:"none"}}>Versity 
                        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                    
                    <p className='mt-5'> TradingQ&A, the most active trading and investment community in 
                        India for all your market related queries. </p>
                    <a href=''className='p-3' style={{textDecoration:"none"}}>TradingQ&A 
                        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>
               
            </div>
        </div>
     );
}

export default Education;