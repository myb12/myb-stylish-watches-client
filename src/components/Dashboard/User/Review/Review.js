import { TextareaAutosize } from '@mui/core';
import { Button, Container, Rating, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../../../hooks/useAuth';
import './Review.css'

const Review = () => {
    // const [value, setValue] = useState(2);
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

        review.reviewer = user.displayName;
        fetch('http://secret-anchorage-33116.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product Added Successfully');
                    history.push('/home');
                }
            })

    }
    return (
        <Container maxWidth="md">
            <Typography variant="h4" className="title">Add a Review</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    name="review"
                    placeholder="Please Add your Review"
                    label="Add Review"
                    multiline
                    rows={5}
                    style={{ width: '100%', marginBottom: 8 }}
                    onChange={handleChange}
                />
                {/* <TextareaAutosize
                    aria-label="minimum height"
                    minRows={10}
                    placeholder="Please Add your Review"
                    style={{ width: '100%' }}
                    onChange={handleChange}
                /> */}

                {/* <Typography component="legend">Rating</Typography>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                /> */}

                <TextField
                    name="rating"
                    sx={{
                        width: '100%', mt: 1
                    }}
                    label="Please Give Rating Between 0 to 5"
                    type="number"
                    onChange={handleChange}
                    variant="outlined" />
                <br />

                <Button sx={{ mt: 2 }} type="submit" className="btn-regular">Add Review</Button>
            </form>
        </Container>
    );
};

export default Review;