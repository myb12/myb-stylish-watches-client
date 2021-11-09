import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <Box className="banner-container" style={{ backgroundColor: 'cyan' }}>
            <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h3" sx={{ color: '#fff', fontWeight: 'bold' }}>
                    MYB
                </Typography>
                <Typography variant="h5" sx={{ color: '#fff' }}>
                    Stylish Watches
                </Typography>
                <Typography sx={{ color: '#fff' }}>
                    Find your dream watch on MYB Stylish Watches.
                </Typography>

                <Button variant="contained" sx={{ backgroundColor: '#03a84e' }}>Explore</Button>
            </Container>
        </Box>
    );
};

export default Banner;