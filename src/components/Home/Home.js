import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Navigation from '../Navigation/Navigation';
import Reviews from '../Reviews/Reviews';
import FaqAccordion from './FaqAccordion/FaQAccordion';
import Footer from '../Footer/Footer';
import { Container, Grid, Typography } from '@mui/material';
import CardComponent from '../CardComponent/CardComponent';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://secret-anchorage-33116.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                const limitedData = data.slice(0, 6);
                setProducts(limitedData)
            })
    }, [])

    return (
        <div>
            <Navigation />
            <Banner />
            {/* limited products */}
            <Container style={{ marginTop: 100 }}>
                <Typography variant="h4" className="title">Our Most Popular Products</Typography>
                <Grid container spacing={3}>
                    {
                        products.map((product) => <CardComponent product={product} key={product._id} />)
                    }
                </Grid>
            </Container>

            <Reviews />
            <FaqAccordion />
            <Footer />
        </div>
    );
};

export default Home;