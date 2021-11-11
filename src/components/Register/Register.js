import {
    Button,
    Divider,
    Grid,
    IconButton,
    InputAdornment,
    TextField,
    Typography
} from "@mui/material";
import "../Login/Login.css";
import { MdEmail } from "react-icons/md";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Navigation from '../Navigation/Navigation';
import { useHistory, useLocation } from "react-router";
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth'

export default function Register() {

    const { signInUsingGoogle, setIsLoading, setName, setEmail, email, password, setPassword, setUserName, setError, registerNewUser, user } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const [loginData, setLoginData] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
        setName(loginData.name);
    }
    // const handleLoginSubmit = e => {
    //     // if (loginData.password !== loginData.password2) {
    //     //     alert('Your password did not match');
    //     //     return
    //     // }
    //     // registerUser(loginData.email, loginData.password, loginData.name, history);
    //     e.preventDefault();
    //     console.log(loginData);
    // }
    const handleSignUp = (e) => {
        e.preventDefault();
        registerNewUser(loginData.email, loginData.password)
            .then(({ user }) => {
                setUserName();
                history.push(location.state?.from || '/');
                setError('');
                window.scrollTo(0, 0);
                //=====this will reload page to show newly registered  user's information=====//
                window.location.reload();
            })
            .catch(error => {
                setError(error.message);
            })
        // console.log(user);
    }


    return (
        <>
            <Navigation />
            <div className="App">
                <Grid container className="login-box">
                    <Grid item sm={12} md={3}></Grid>
                    <Grid sm={12} md={6} className="form-box">
                        <Typography variant="h4" className="heading">
                            Login
                        </Typography>
                        <div className="divider" />

                        <form onSubmit={handleSignUp}>
                            <TextField
                                className="inputFields"
                                label="Name"
                                name="name"
                                variant="standard"
                                InputProps={{
                                    // <-- This is where the toggle button is added.
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <FaUserAlt />
                                        </InputAdornment>
                                    )
                                }}
                                sx={{ mt: 2 }}
                                onBlur={handleOnBlur}
                            />

                            <TextField
                                className="inputFields"
                                label="Email address"
                                name="email"
                                type="email"
                                variant="standard"
                                InputProps={{
                                    // <-- This is where the toggle button is added.
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <MdEmail />
                                        </InputAdornment>
                                    )
                                }}
                                sx={{ mt: 2 }}
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                className="inputFields"
                                label="Password"
                                variant="standard"
                                type="password"
                                name="password"
                                InputProps={{
                                    // <-- This is where the toggle button is added.
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <FaLock />
                                        </InputAdornment>
                                    )
                                }}
                                sx={{ mt: 2 }}
                                onBlur={handleOnBlur}
                            />
                            <Button type="submit" variant="contained" className="inputFields" sx={{ mt: 2 }}>
                                Login
                            </Button>
                        </form>
                        <Typography variant="body1">
                            Don't have an account? <a href="#">Register</a> here
                        </Typography>
                        <div className="or-section">
                            <div className="or-divider" />
                            <Typography variant="h5">Or</Typography>
                            <div className="or-divider" />
                        </div>
                        <Button variant="outlined" className="continue-with-button">
                            Continue with &nbsp; &nbsp; <FcGoogle />
                        </Button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path
                                fill="#c39052"
                                fill-opacity="0.3"
                                d="M0,128L60,154.7C120,181,240,235,360,245.3C480,256,600,224,720,197.3C840,171,960,149,1080,144C1200,139,1320,149,1380,154.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                            ></path>
                        </svg>
                    </Grid>
                    <Grid item sm={12} md={3}></Grid>
                </Grid>
            </div></>
    );
}