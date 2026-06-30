import React from 'react';
function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/homeHero.png' alt='stockmatket' className='mb-5'/>
                <h2 className='mt-5 fs-2'style={{color:"#424242"}}>Invest in everything</h2>
                <p>Online Platform to invest in online,stocks,mutual funds and more</p>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 auto"}}>Signup Now</button>

            </div>
            
        </div>
     );
}

export default Hero;