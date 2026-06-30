import React from 'react';
function Status() {
    return ( 
       <div className='container p-3 'style={{color:"#424242"}}>
            <div className='row p-5 '>
               <div className='col-6 p-5'>
                <h1 className='fs-3 mb-4'>Trust with confidence</h1>
                <h2 className='fs-5'>Custumer-first always</h2>
                <p className='text-muted'>That's why 1.3+ core customers trust TradePath with 3.5+
                    lakh crores worth of equity investor.
                </p>
                <h2 className='fs-5'>No spam or gimmicks</h2>
                <p className='text-muted'>No gimmicks spam, "gamification" or annoying push notifications.
                    High quality apps that you use at your place  .
                </p>
                <h2 className='fs-5'>The TradePath universe</h2>
                <p className='text-muted'>Not just an app, but a whole ecosystem. Our environments in 30+ fintech startups
                    offer you tailored service specific to you needs.
                </p>
                <h2 className='fs-5'>Do better with money</h2>
                <p className='text-muted'> With initaives like Nudge and kill switch, We do not just facilitate transactions,
                    but actively help you do better with your money.
                </p>
                </div> 
               <div className='col-6 p-5'>
                    <img src='media\ecosystem.png' style={{width:"90%"}}/>
                    <div className='text-center'>
                        <a href='/' className='mx-5' style={{textDecoration:"none"}}>Explore our Product <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href='/' style={{textDecoration:"none"}}>Try Kite</a>
                    </div>
                </div> 
            </div>
       </div>
     );
}

export default Status;