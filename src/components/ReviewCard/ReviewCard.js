import { Button, Card, CardActions, CardContent, Divider, Grid, Rating, Typography } from '@mui/material';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const ReviewCard = ({ review }) => {

    return (
        <Grid item xs={12} md={6} className="review-card-container">
            <Card style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {review.reviewer}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Rating name="read-only" value={+review.rating} readOnly precision={0.5} sx={{ mb: 1.5 }} />
                    <Typography variant="body2">
                        {review.review}
                    </Typography>
                </CardContent>
                <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button size="small" sx={{ color: '#c39052' }}>Learn More</Button>
                    <BsArrowRight style={{ marginRight: 15 }} />
                </CardActions>
            </Card>
        </Grid>
    );
};

export default ReviewCard;