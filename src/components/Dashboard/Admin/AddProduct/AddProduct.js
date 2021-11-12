import { Button, Container, Rating, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
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
        setProduct(newProduct);
    }

    const handleSubmit = e => {
        e.preventDefault();

        const newProduct = { ...product }
        newProduct.rating = rating;

        fetch('http://secret-anchorage-33116.herokuapp.com/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product Added Successfully');
                    history.push('/products');
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

                <TextField
                    label="Product Desription"
                    name="description"
                    multiline
                    rows={5}
                    style={{ width: '100%', margin: '8px 0 8px 8px' }}
                    onChange={handleChange}
                />

                <Typography component="legend" sx={{ ml: 1 }}>Rating</Typography>
                <Rating
                    precision={0.5}
                    value={rating}
                    onChange={(event, newValue) => {
                        setRating(newValue);
                    }}
                    sx={{ ml: 1 }}
                />
                <br />
                <Button sx={{ mt: 2, ml: 1 }} type="submit" className="btn-regular">Purchase Now</Button>
            </form>
        </Container >
    );
};

export default AddProduct;