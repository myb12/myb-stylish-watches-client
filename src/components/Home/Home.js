import React from 'react';
import Banner from '../Banner/Banner';
import Navigation from '../Navigation/Navigation';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import FaqAccordion from './FaqAccordion/FaQAccordion';
import Footer from '../Footer/Footer';
import './Home.css'

const Home = () => {

    return (
        <div>
            <Navigation />
            <Banner />
            <Products />
            <Reviews />
            <FaqAccordion />
            <Footer />
        </div>
    );
};

export default Home;