import { Button, Container, Rating, TextField, Typography } from '@mui/material';
import { TextareaAutosize } from '@mui/core';
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { useHistory } from 'react-router';

const AddProduct = () => {
    const [rating, setRating] = useState(0);
    const [product, setProduct] = useState({});
    const history = useHistory();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const newProduct = { ...product };
        newProduct[name] = value;
        // newProduct.rating = rating;
        setProduct(newProduct);
    }

    //  https://i.ibb.co/J20R3sX/product3.webp

    // useEffect(() => {
    //     const newProduct = { ...product };
    //     newProduct.rating = rating;
    // }, [rating])

    const handleSubmit = e => {
        e.preventDefault();

        console.log(product);
        fetch('http://secret-anchorage-33116.herokuapp.com/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
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
        <Container Container maxWidth="md" >
            <Typography variant="h4" className="title">Add a Product</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{
                        width: '100%', m: 1
                    }}
                    id="standard-basic"
                    label="Product Name"
                    name="title"
                    onChange={handleChange}
                    variant="standard" />

                <TextField
                    sx={{
                        width: '100%', m: 1
                    }}
                    label="Product Price"
                    name="price"
                    onChange={handleChange}
                    variant="standard" />
                <TextField
                    sx={{
                        width: '100%', m: 1
                    }}
                    label="Image URL"
                    name="imgURL"
                    onChange={handleChange}
                    variant="standard" />

                {/* <TextareaAutosize
                    aria-label="minimum height"
                    minRows={10}
                    placeholder="Product description"
                    style={{ width: '100%', marginLeft: 8, marginTop: 8 }}
                    onChange={handleChange}
                /> */}

                <TextField
                    label="Product Desription"
                    name="description"
                    multiline
                    rows={5}
                    style={{ width: '100%', margin: '8px 0 8px 8px' }}
                    onChange={handleChange}
                />

                <TextField
                    sx={{
                        width: '100%', m: 1
                    }}
                    label="Please Give Rating Between 0 to 5"
                    type="number"
                    name="rating"
                    onChange={handleChange}
                    variant="standard" />


                {/* <Typography component="legend" sx={{ ml: 1 }}>Rating</Typography>
                <Rating

                    value={rating}
                    onChange={(event, newValue) => {
                        setRating(newValue);
                    }}
                    sx={{ ml: 1 }}
                /> */}
                <br />
                <Button sx={{ mt: 2, ml: 1 }} type="submit" className="btn-regular">Purchase Now</Button>
            </form>
        </Container >
    );
};

export default AddProduct;