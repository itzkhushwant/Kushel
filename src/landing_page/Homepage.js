import React from 'react';
import Hero from './Hero';
import Start from './Start';
import Service from './Service';
import Stage from './Stage';
import Portfolio from './Portfolio';
import Consultation from './Consultation';
import Footer from './Footer';
import Navbar from './Navbar';

function Homepage() {
    return (
        <>
        <Navbar/>
        <Hero />
        <Service/>
        <Start/>
        <Stage/>
        <Portfolio/>
        <Consultation/>
        <Footer/>
        </>
    );
}

export default Homepage;