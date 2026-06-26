import React from 'react';
function Universe({imageURL,productName,productDescription,tryDemo,learnMore}) {
    return ( 
        <div className='container mt-5 text-muted' >
            <div className='row text-center'>
                <h1>The TradePath Universe</h1>
                <p>
                    Extend your trading and investment experience even further with our partner platforms
                </p>
                <div className='col-4 p-3 text-center'>
                    <div className='p-4'>
                        <img src="media/smallcaseLogo.png" alt="Smallcase Logo"/>
                        <p className='p-3' style={{fontSize:"12px",textAlign:"center"}}>Our asset management venture
                            that is creating simple and transparent index
                            funds to help you save for your goals.</p>
                    </div>
                    <div className='p-4'>
                        <img style={{width:'199px',height:'52px'}} src="media/tradepathFundhouse.png" alt="TradePath Fundhouse Logo"/>
                        <p className='p-3'style={{fontSize:"12px",textAlign:"center"}}>Our asset management venture
                            that is creating simple and transparent index
                            funds to help you save for your goals.</p>
                    </div>
                    
                
                    
                </div>

                <div className='col-4 p-3'>
                    <div className='p-4'>
                        <img style={{width:'199px',height:'52px'}} src="media/streakLogo.png" alt="Streak Logo"/>
                        <p className='p-3'style={{fontSize:"12px",textAlign:"center"}}>Systematic trading platform that allows you to create and backteststrategies without coding.</p>
                    </div>
                    <div className='p-4'>
                        <img style={{width:'199px',height:'58px'}} src="media/goldenpiLogo.png" alt="GoldenPi Logo"/>
                        <p className='p-3'style={{fontSize:"12px",textAlign:"center"}}>Investment research platform that offers detailed insights on stocks,sectors, supply chains, and more.</p>
                    </div>
                </div>

                 <div className='col-4 p-3'>
                    <div className='p-4'>
                        <img style={{width:'199px',height:'52px'}} src="media/sensibullLogo.svg" alt="Sensibull Logo"/>
                        <p className='p-3'style={{fontSize:"12px",textAlign:"center"}}>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                        
                    </div>
                    <div className='p-4'>
                        <img style={{width:'150px',height:'50px'}} src='media/dittoLogo.png' alt="Ditto Logo"/>
                        <p className='p-3'style={{fontSize:"12px",textAlign:"center"}}>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                        
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Universe;
