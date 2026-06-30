import React from 'react';
function Team() {
    return ( 
                <div className='cantainer'>
            <div className='row mt-5 p-5 mb-5 border-top'>
                <h1 className='text-center text-muted '>People</h1>
            </div>
            <div className='row p-5 mt-5' >
                <div className='col-2'></div>
                <div className='col-4 text-muted text-center' style={{lineHeight:".5",fontSize:"1em"}}>
                   <img src='media/RajanW.png' alt='Treadpath'></img>
                   <p >Rajan Kushwaha</p>
                   <p>Founder</p>
                </div>
                <div className='col-4 text-muted' style={{lineHeight:"1.8",fontSize:"1em"}}>
                    <p>
                        In addition, we run a number of popular open online educational
                        and community initiatives to empower retail traders and investors.
                    </p>
                    <p>
                       <a href='/' style={{textDecoration:"none"}}>Rainmatter</a>, our fintech fund and incubator, has invested in several 
                        fintech startups with the goal of growing the Indian capital markets.
                    </p>
                    <p>
                        And yet, we are always up to something new every day. Catch up on the 
                        latest updates on our <a href='/' style={{textDecoration:"none"}}>blog</a> or see what the media is <a href='/' style={{textDecoration:"none"}}>saying about us</a> or learn 
                        more about our business and product <a href='/' style={{textDecoration:"none"}}> philosophies</a>.
                    </p>
                </div>
                <div className='col-2'></div>
            </div>
        </div>
     );
}

export default Team;