import { Alert, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './NotFound.css';
import { Box } from '@mui/system';

const NotFound = () => {
    const history = useHistory();
    const handleBackHome = () => {
        history.push('/home')
    }
    return (
        <section className="not-found-container" >
            <Grid container>
                <Grid item xs={12}>
                    <Box className="four-zero-four-bg">
                    </Box>
                </Grid>
            </Grid>
            <Alert severity="error">Page Not Found!</Alert>
            <Button className="btn-regular" sx={{ mt: 3 }} onClick={handleBackHome}>Back to home</Button>
        </section>
    );
};

export default NotFound;