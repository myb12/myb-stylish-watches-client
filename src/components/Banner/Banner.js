import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useHistory } from 'react-router';
import './Banner.css';

const Banner = () => {
    const history = useHistory();
    const handleAllProducts = () => {
        history.push('/products');
    }
    return (
        <Box className="banner-container" style={{ backgroundColor: 'cyan' }}>
            <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h3" sx={{ color: '#fff', fontWeight: 'bold' }}>
                    MYB
                </Typography>
                <Typography variant="h5" sx={{ color: '#fff' }}>
                    Stylish Watches
                </Typography>

                <Typography sx={{ color: '#fff', fontSize: 20, fontWeight: 300, marginTop: 2, textAlign: 'center' }}>
                    From timeless classics to the most innovative independent brands, take your dream watch to new heights with a selection of exceptional pieces.
                </Typography>

                <Button className="btn-regular" onClick={handleAllProducts} style={{ marginTop: 10, width: '30%' }}>Explore</Button>
            </Container>
        </Box>
    );
};

export default Banner;