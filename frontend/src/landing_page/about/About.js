import React from 'react';
import Hero from './Hero';
import Team from "./Team"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function About() {
    const { pathname } = useLocation();
        useEffect(() => {
            window.scrollTo(0, 0);
        }, 
        [pathname]);
    return ( 
        <>
            <Hero />
            <Team />
        </>
     );
}

export default About;