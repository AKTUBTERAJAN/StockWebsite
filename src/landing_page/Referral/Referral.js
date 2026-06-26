import React from 'react';
import Hero from './Hero';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Referral() {
     const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, 
    [pathname]);
    return ( 
        <>  
            <Hero />
        </>
     );
}

export default Referral;