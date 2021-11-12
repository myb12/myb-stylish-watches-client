import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://secret-anchorage-33116.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <Container style={{ marginTop: 100 }}>
            <Typography variant="h4" className="title">Reviews</Typography>

            <Grid container spacing={2}>
                {
                    reviews?.map(review => <ReviewCard review={review} />)
                }
            </Grid>

        </Container>
    );
};

export default Reviews;