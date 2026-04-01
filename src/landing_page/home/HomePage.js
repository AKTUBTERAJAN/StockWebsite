import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Status from './Status';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import NotFound from '../NotFound';

function HomePage() {
    return (  
    <> 
        <Hero />
        <Awards /> 
        <Status />
        <Pricing />
        <Education />
        <OpenAccount />

        </>
    );
}

export default HomePage;