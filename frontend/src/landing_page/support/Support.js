import React from 'react';
import Hero from './Hero';
import CreateTicket from './CreateTicket';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";



function Support() {
     const { pathname } = useLocation();
        useEffect(() => {
            window.scrollTo(0, 0);
        }, 
        [pathname]);
    return ( 
        <>
            <Hero/>
            <CreateTicket/>
            
        </>
     );
}

export default Support;