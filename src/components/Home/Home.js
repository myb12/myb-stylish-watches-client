import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Navigation from '../Navigation/Navigation';
import Reviews from '../Reviews/Reviews';
import FaqAccordion from './FaqAccordion/FaQAccordion';
import Footer from '../Footer/Footer';
import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import CardComponent from '../CardComponent/CardComponent';
import { Box } from '@mui/system';
import { BASE_URL } from '../../config/config';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`${BASE_URL}/products`)
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
                <Typography variant="h4" className="title">Some of Our Products</Typography>
                <Grid container spacing={3}>
                    {
                        !products.length ? <Box style={{ display: 'flex', justifyContent: 'center', marginTop: 50,width:'100%' }}>
                            <CircularProgress style={{ color: '#c39052' }} />
                        </Box> :
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