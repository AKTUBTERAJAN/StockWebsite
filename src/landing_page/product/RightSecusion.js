import React from 'react';
function RightSecustion({imageURL,productName,productDescription,tryDemo,learnMore}) {
    return ( 
       <div className='container mt-5 text-muted' >
            <div className='row '>
                
                <div className='col-6'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={learnMore} style={{textDecoration:"none"}}>Learn More <a href=''><i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></a>
                    </div>
                   
                </div>
                <div className='col-6'>
                    <img src={imageURL} />
                </div>
            </div>
        </div>
     );
}

export default RightSecustion;