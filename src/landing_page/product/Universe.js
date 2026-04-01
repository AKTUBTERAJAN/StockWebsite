import React from 'react';
function Universe({imageURL,productName,productDescription,tryDemo,learnMore}) {
    return ( 
        <div className='container mt-5 text-muted' >
            <div className='row text-center'>
                <h1>The Zerodha Universe</h1>
                <p>
                    Extend your trading and investment experience even further with our partner platforms
                </p>
                <div className='col-4 p-3'>
                    
                        <img src="media/smallcaseLogo.png"/>
                        <p className=''></p>
                        <img style={{width:'199px',height:'52px'}} src="media/zerodhaFundhouse.png"/>
                        <p></p>

                    
                
                    
                </div>

                 <div className='col-4 p-3'>
                    
                        <img style={{width:'199px',height:'52px'}} src="media/streakLogo.png"/>
                        <p></p>
                        <img src="media/goldenpiLogo.png"/>
                        <p></p>
                </div>

                 <div className='col-4 p-3'>
                    
                        <img src="media/sensibullLogo.svg"/>
                        <p></p>
                        <img style={{width:'199px',height:'52px'}} src='media/dittoLogo.png'></img>
                        <p></p>
                </div>
            </div>
        </div>
     );
}

export default Universe;