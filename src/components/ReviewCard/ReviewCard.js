import { Button, Card, CardActions, CardContent, Divider, Grid, Rating, Typography } from '@mui/material';
import React from 'react';
import './ReviewCard.css'

const ReviewCard = ({ review }) => {

    return (
        <Grid item xs={12} md={6}>
            <Card style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {review.reviewer}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Rating name="read-only" value={review.rating} readOnly precision={0.5} sx={{ mb: 1.5 }} />
                    <Typography variant="body2">
                        {review.review}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" sx={{ color: '#c39052' }}>Learn More</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default ReviewCard;