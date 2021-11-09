import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import CardComponent from '../CardComponent/CardComponent';
import './Products.css'

const Products = () => {
    return (
        <Container style={{ marginTop: 100 }}>
            <Typography variant="h4" className="title">Some of Our Services</Typography>
            <Grid container spacing={3}>
                {
                    [...Array(6)].map((el, i) => <CardComponent key={i} />)
                }
            </Grid>
        </Container>
    );
};

export default Products;