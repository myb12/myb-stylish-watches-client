import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import CardComponent from '../CardComponent/CardComponent';
import './Products.css'
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://secret-anchorage-33116.herokuapp.com/products')
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
                        products.map((product) => <CardComponent product={product} key={product._id} />)
                    }
                </Grid>
            </Container>
            <Footer />
        </>
    );
};

export default Products;