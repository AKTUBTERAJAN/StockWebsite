import React from 'react';
function Hero() {
    return ( 
       <div className='container p-5'style={{color:"#424242",fontSize:"14px"}}>
            <div className='row text-center border-bottom'>
                <h1 className='mt-5 '>Pricing</h1>
                <p className='fs-4'> free equity  investment, and flat 20 intraday and F&O trades.</p>

            </div>
            <div className='row p-5 mt-2 text-center border-bottom'>
                <div className='col-4 p-4'>
                    <img src='media/pricing0.svg' alt='Pricing'/>
                    <h2 className='fs-5'> Free equity Delivery</h2>
                    <p>All equity delivery trades are free of cost.</p>
                </div>
                  
                <div className='col-4 p-4'>
                    <img src='media/intradayTrades.svg' alt='Pricing'/>
                    <h2 className='fs-5'> Intraday and F&O Trades </h2>
                    <p>Flat 20 INR per trade for intraday equity trades.</p>
                </div>
                <div className='col-4 p-4'>
                    <img src='media/pricing0.svg' alt='Pricing'/>
                    <h2 className='fs-5'> Free direct MF</h2>
                    <p>All direct mutual fund investments are free of cost.</p>
                </div>

            </div>
        </div>
        
     );
}

export default Hero;