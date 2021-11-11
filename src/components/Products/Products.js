import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import CardComponent from '../CardComponent/CardComponent';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products);
    return (
        <Container style={{ marginTop: 100 }}>
            <Typography variant="h4" className="title">Some of Our Products</Typography>
            <Grid container spacing={3}>
                {
                    products.map((product) => <CardComponent product={product} key={product._id} />)
                }
            </Grid>
        </Container>
    );
};

export default Products;