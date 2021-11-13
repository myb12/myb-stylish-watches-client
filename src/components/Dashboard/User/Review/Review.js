import { Button, Container, Rating, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../../../hooks/useAuth';

const Review = () => {
    const [rating, setRating] = useState(2);
    const { user } = useAuth();
    const [review, setReview] = useState({})
    const history = useHistory();


    const handleChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newReview = { ...review }
        newReview[field] = value;
        setReview(newReview);
    }


    const handleSubmit = e => {
        e.preventDefault();

        const newReview = { ...review }
        newReview.reviewer = user.displayName;
        newReview.rating = rating;

        fetch('https://secret-anchorage-33116.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Review Added Successfully');
                    history.push('/home');
                }
            })
    }
    return (
        <Container maxWidth="md" >
            <Typography variant="h4" className="title">Add a Review</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    required
                    name="review"
                    placeholder="Please Add your Review"
                    label="Add Review"
                    multiline
                    rows={5}
                    style={{ width: '100%', marginBottom: 8 }}
                    onChange={handleChange}
                />

                <Typography component="legend">Rating</Typography>
                <Rating
                    precision={0.5}
                    name="simple-controlled"
                    value={rating}
                    onChange={(event, newValue) => {
                        setRating(newValue);
                    }}
                />
                <br />
                <Button sx={{ mt: 2 }} type="submit" className="btn-regular">Add Review</Button>
            </form>
        </Container>
    );
};

export default Review;