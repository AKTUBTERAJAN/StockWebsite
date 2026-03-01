import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Status from './Status';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
import Navbar from '../Navbar';

function HomePage() {
    return (  
    <>  <Navbar />
        <Hero />
        <Awards /> 
        <Status />
        <Pricing />
        <Education />
        <OpenAccount />
        <Footer />

        </>
    );
}

export default HomePage;