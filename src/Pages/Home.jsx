import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Game from '../Components/Game';
import Electronics from '../Components/Electronics';
import Crumb from '../Components/Crumb';
import HotDeals from '../Components/HotDeals';
import Footer from '../Components/Footer';
import ProductShowcase from '../Components/ProductShowCase';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Game/>
            <Electronics/>
            <Crumb/>
            <HotDeals/>
            <ProductShowcase/>
            <Footer/>
        </div>
    );
};

export default Home;