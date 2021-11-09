import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Banner from '../Banner/Banner';
import CardComponent from '../CardComponent/CardComponent';
import Navigation from '../Navigation/Navigation';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Container style={{ marginTop: 100 }}>
                <Typography variant="h4" className="title">Some of Our Services</Typography>
                <Grid container spacing={3}>
                    {
                        [...Array(6)].map((el, i) => <CardComponent key={i} />)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Home;