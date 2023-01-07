import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../config/config.js';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`${BASE_URL}/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <Box className="reviews-container">
            <Container >
                <Typography variant="h4" className="title">Reviews</Typography>

                <Grid container spacing={2}>
                    {
                        !reviews.length ? <Box style={{ display: 'flex', justifyContent: 'center', marginTop: 50, width: '100%' }}>
                            <CircularProgress style={{ color: '#c39052' }} />
                        </Box> :
                            reviews?.map(review => <ReviewCard key={review._id} review={review} />)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Reviews;