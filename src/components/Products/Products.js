import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import CardComponent from '../CardComponent/CardComponent';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://secret-anchorage-33116.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                const numData = data.slice(0, 6);
                setProducts(numData)
            })
    }, [])

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