import { TextareaAutosize } from '@mui/core';
import { Button, Container, Rating, Typography } from '@mui/material';
import React, { useState } from 'react';
import './Review.css'

const Review = () => {
    const [value, setValue] = useState(2);
    const [review, setReview] = useState({ review: '', rating: '' })
    console.log(value);

    const handleChange = (e) => {
        const newReview = { ...review }
        newReview['review'] = e.target.value;
        setReview(newReview);
    }


    const handleSubmit = e => {
        e.preventDefault();
        const newReview = { ...review }
        newReview.rating = value;
        console.log(newReview);
        setReview(newReview);
    }
    return (
        <Container maxWidth="md">
            <Typography variant="h4" className="title">Add a Review</Typography>
            <form onSubmit={handleSubmit}>
                <TextareaAutosize
                    aria-label="minimum height"
                    minRows={10}
                    placeholder="Please Add your Review"
                    style={{ width: '100%' }}
                    onChange={handleChange}
                />

                <Typography component="legend">Rating</Typography>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
                <br />

                <Button sx={{ mt: 2 }} type="submit" className="btn-regular">Add Review</Button>
            </form>
        </Container>
    );
};

export default Review;