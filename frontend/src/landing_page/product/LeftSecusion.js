import React from 'react';
function LeftSecustion({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return ( 
        <div className='container mt-5 text-muted'>
            <div className='row '>
                <div className='col-4 '>
                    <img src={imageURL} className='p-5'/>
                </div>
                <div className='col-4'></div>
                <div className='col-4  mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={tryDemo} style={{marginLeft:"10px" ,textDecoration:"none"}}>Try Demo<a href='/'><i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></a>

                        <a href={learnMore} style={{marginLeft:"75px" ,textDecoration:"none"}}>Learn More <a href='/'><i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></a>
                    </div>
                    <div className='mt-3'>
                        <a href={googlePlay}><img src='media/googlePlayBadge.svg'/></a>
                        <a href={appStore}><img src='media/appstoreBadge.svg' style={{marginLeft:"30px"}}/></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSecustion;