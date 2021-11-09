import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const Reviews = () => {
    return (
        <Container style={{ marginTop: 100 }}>
            <Typography variant="h4" className="title">Reviews</Typography>
                    <ReviewCard />
        </Container>
    );
};

export default Reviews;