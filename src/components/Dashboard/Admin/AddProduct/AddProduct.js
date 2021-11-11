import { Button, Container, Rating, TextField, Typography } from '@mui/material';
import { TextareaAutosize } from '@mui/core';
import React, { useState } from 'react';
import { Box } from '@mui/system';

const AddProduct = () => {
    const [value, setValue] = useState(2);

    const handleSubmit = e => {
        e.preventDefault();
    }

    const handleOnChange = () => { }
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
                    onChange={handleOnChange}
                    variant="standard" />

                <TextField
                    sx={{
                        width: '100%', m: 1
                    }}
                    label="Product Price"
                    name="price"
                    onChange={handleOnChange}
                    variant="standard" />
                <TextField
                    sx={{
                        width: '100%', m: 1
                    }}
                    label="Image URL"
                    name="imgURL"
                    onChange={handleOnChange}
                    variant="standard" />

                {/* <TextareaAutosize
                    aria-label="minimum height"
                    minRows={10}
                    placeholder="Product description"
                    style={{ width: '100%', marginLeft: 8, marginTop: 8 }}
                    onChange={handleOnChange}
                /> */}

                <TextField
                    placeholder="Please Add your Review"
                    label="Add Review"
                    multiline
                    maxRows={10}
                    rows={5}
                    style={{ width: '100%', margin: '8px 0 8px 8px' }}
                    onChange={handleOnChange}
                />


                <Typography component="legend" sx={{ ml: 1 }}>Rating</Typography>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
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