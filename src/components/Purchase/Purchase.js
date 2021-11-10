import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const Purchase = () => {
    const [loginData, setLoginData] = useState({ name: 'yasin' });
    const history = useHistory();

    // const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        // console.log(loginData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(loginData);
    }

    return (
        <>
            <Navigation />
            <Container style={{ marginTop: 100 }} maxWidth="md">
                <Typography variant="h4" className="title">Purchase</Typography>

                <Box style={{ display: 'flex', justifyContent: 'center' }}>
                    <img style={{ maxWidth: '100%' }} src="https://cdn2.chrono24.com/images/uhren/21179480-zupdskf0ieetp9nqzeazzg2g-Square210.jpg" alt="" />
                </Box>
                <form onSubmit={handleSubmit}>
                    <TextField
                        sx={{
                            width: '100%', m: 1
                        }}
                        id="standard-basic"
                        label="Your Name"
                        name="name"
                        value={loginData?.name || ''
                        }
                        onChange={handleOnChange}
                        variant="standard" />
                    <TextField
                        sx={{
                            width: '100%', m: 1
                        }}

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
                        id="standard-basic"
                        label="Product Name"
                        name="title"
                        onChange={handleOnChange}
                        variant="standard" />
                    <TextField
                        sx={{
                            width: '100%', m: 1
                        }}
                        id="standard-basic"
                        label="Product Price"
                        name="price"
                        onChange={handleOnChange}
                        variant="standard" />
                    <Button sx={{ m: 1 }} type="submit" className="btn-regular">Purchase Now</Button>
                </form>
            </Container>
        </>
    );
};

export default Purchase;