import React from 'react';
import { Link } from 'react-router-dom';
function Hero() {
    return ( 
        <div className='containe ' id='supportHero'>
            
                <div className='p-5 ' id='supportHeroContent'>
                    <h3>Support Portal</h3>
                        <a href='/' >Track Tickets</a>
                    

                </div>
                <div className='row p-5  '>
                    <div className='col-6 '>
                        <p className='fs-4'>Search for an answer or browser help topic to create a ticket </p>
                        <input placeholder='Eg. how do i activate F&O why is my Getting registerd '></input><br/>
                        <Link to='/Openaccount' >Track account opening</Link>&nbsp;&nbsp;&nbsp;
                        <a href='/' >Track segment activation</a>&nbsp;&nbsp;&nbsp;
                        <a href='/' >Intra-day margins</a><br/>
                        <a href='/' >Kite user manual</a>

                    </div>
                    <div className='col-6 '>
                        <h5 >Features</h5>
                        <ol style={{lineHeight:"40px"}}>
                            <li>
                                <a href='/'>Current Takeovers and Delistings</a>
                            </li>
                            <li>
                                <a href='/'>Latest Intra-day -MIS & CO</a>
                            </li>
                        </ol>
                    </div>
                </div>
            
        </div>
     );
}

export default Hero;