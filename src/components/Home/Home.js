import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import Navigation from '../Navigation/Navigation';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import FaqAccordion from './FaqAccordion/FaQAccordion';
import './Home.css'

const Home = () => {

    return (
        <div>
            <Navigation />
            <Banner />
            <Products />
            <Reviews />
            <FaqAccordion />
        </div>
    );
};

export default Home;