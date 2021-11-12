import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://secret-anchorage-33116.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <Box className="reviews-container">
            <Container >
                <Typography variant="h4" className="title">Reviews</Typography>

                <Grid container spacing={2}>
                    {
                        reviews?.map(review => <ReviewCard review={review} />)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Reviews;