import React from 'react';
import Hero from './Hero';
import OpenAccount from '../OpenAccount';
import Brokrage from '../pricing/Brokrage';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function PricingPage() {
        const { pathname } = useLocation();
        useEffect(() => {
            window.scrollTo(0, 0);
        }, 
        [pathname]);
    return ( 
        <>
            <Hero/>
            <OpenAccount/>
            <Brokrage/>

        </>
     );
}

export default PricingPage;