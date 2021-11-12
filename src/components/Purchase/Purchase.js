import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Navigation from '../Navigation/Navigation';

const Purchase = () => {
    const { user } = useAuth();
    const [specificProduct, setSpecificProduct] = useState({});
    const history = useHistory();
    const { productId } = useParams();

    useEffect(() => {
        fetch(`https://secret-anchorage-33116.herokuapp.com/product/${productId}`)
            .then(res => res.json())
            .then(data => {
                setSpecificProduct(data);
            })
    }, [productId])


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = { ...specificProduct };
        newProduct[field] = value;
        setSpecificProduct(newProduct);
        // console.log(specificProduct);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        specificProduct.name = user.displayName;
        specificProduct.email = user.email;
        specificProduct.orderStatus = "Pending";
        delete specificProduct._id;
        delete specificProduct.description;

        fetch('https://secret-anchorage-33116.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(specificProduct)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed successfully');
                    history.push('/dashboard/myOrders')
                }
            })
    }

    return (
        <>
            <Navigation />
            <Container style={{ marginTop: 100 }} maxWidth="md">
                <Typography variant="h4" className="title">Purchase</Typography>

                <Box style={{ display: 'flex', justifyContent: 'center' }}>
                    <img style={{ width: 200, }} src={specificProduct.imgURL} alt="" />
                </Box>
                <form onSubmit={handleSubmit}>
                    <TextField
                        sx={{
                            width: '100%', m: 1
                        }}
                        id="standard-basic"
                        label="Your Name"
                        name="name"
                        value={user?.displayName || ''}
                        onChange={handleOnChange}
                        variant="standard" />
                    <TextField
                        sx={{
                            width: '100%', m: 1
                        }}
                        value={user?.email || ''}
                        label="Your Email"
                        name="email"
                        type="email"
                        onChange={handleOnChange}
                        variant="standard" />

                    <TextField
                        sx={{
                            width: '100%', m: 1
                        }}
                        label="Your Address"
                        name="address"
                        onChange={handleOnChange}
                        variant="standard" />
                    <TextField
                        sx={{
                            width: '100%', m: 1
                        }}
                        label="Your Phone Number"
                        name="phone"
                        onChange={handleOnChange}
                        variant="standard" />

                    <TextField
                        sx={{
                            width: '100%', m: 1
                        }}
                        value={specificProduct?.title || ''}
                        id="standard-basic"
                        label="Product Name"
                        name="title"
                        onChange={handleOnChange}
                        variant="standard" />
                    <TextField
                        sx={{
                            width: '100%', m: 1
                        }}
                        value={specificProduct?.title || ''}
                        id="standard-basic"
                        label="Product Price"
                        name="price"
                        onChange={handleOnChange}
                        variant="standard" />
                    <Button sx={{ m: 1 }} type="submit" className="btn-regular">Order Purchase</Button>
                </form>
            </Container>
        </>
    );
};

export default Purchase;