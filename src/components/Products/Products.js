import React, { useEffect, useState } from 'react';
import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import CardComponent from '../CardComponent/CardComponent';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import { Box } from '@mui/system';
import { BASE_URL } from '../../config/config.js';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`${BASE_URL}/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <>
            <Navigation />
            <Container style={{ marginTop: 100 }}>
                <Typography variant="h4" className="title">Our Most Popular Products</Typography>
                <Grid container spacing={3}>
                    {
                        !products.length ? <Box style={{ display: 'flex', justifyContent: 'center', marginTop: 50, width: '100%' }}>
                            <CircularProgress style={{ color: '#c39052' }} />
                        </Box> :
                            products.map((product) => <CardComponent product={product} key={product._id} />)
                    }
                </Grid>
            </Container>
            <Footer />
        </>
    );
};

export default Products;