import {
    Button,
    Divider,
    Grid,
    IconButton,
    InputAdornment,
    TextField,
    Typography
} from "@mui/material";
import "./Login.css";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Navigation from '../Navigation/Navigation';
import useAuth from "../../hooks/useAuth";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function App() {

    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const location = useLocation();


    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleSignIn = (e) => {
        e.preventDefault();
        loginUser(email, password, location, history)
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
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

                        <form onSubmit={handleSignIn}>
                            <TextField
                                onBlur={handleEmailChange}
                                className="inputFields"
                                label="Email address"
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
                            />
                            <TextField
                                onBlur={handlePasswordChange}
                                className="inputFields"
                                label="Password"
                                variant="standard"
                                InputProps={{
                                    // <-- This is where the toggle button is added.
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <FaLock />
                                        </InputAdornment>
                                    )
                                }}
                                sx={{ mt: 2 }}
                            />

                            <Button variant="contained" type="submit" className="inputFields" sx={{ mt: 2 }}>
                                Login
                            </Button>
                        </form>

                        <Typography variant="body1" sx={{ mt: 2 }}>
                            Don't have an account? <Link to="/register">Register</Link> here
                        </Typography>
                        <div className="or-section">
                            <div className="or-divider" />
                            <Typography variant="h5">Or</Typography>
                            <div className="or-divider" />
                        </div>
                        <Button onClick={handleGoogleSignIn} variant="outlined" className="continue-with-button">
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