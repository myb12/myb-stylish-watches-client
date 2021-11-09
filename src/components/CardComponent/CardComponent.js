import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import './CardComponent.css';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { Box } from '@mui/system';

const CardComponent = () => {
    return (
        <Grid item xs={12} sm={6} md={4} className="card-container">
            <Card className="card">
                <Box sx={{ display: 'flex', justifyContent: 'center' }} className="image-container">
                    <CardMedia
                        component="img"
                        image="https://cdn2.chrono24.com/images/uhren/21179480-zupdskf0ieetp9nqzeazzg2g-Square210.jpg"
                    />
                </Box>
                <CardContent sx={{ pt: 0 }}>
                    <Typography gutterBottom variant="h5" component="div">
                        Rolex Submariner
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                        Rolex Submariner 40mm Yellow Gold & Steel Blue Dial 116613LB
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 700 }}>
                        $17,500
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: 14, mt: 2 }}>
                        Professional Dealer
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: 14, mt: 3 }}>
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                            <AiFillStar style={{ marginRight: 5, color:'#c39052'}}/> 4.96(188)
                        </span>
                    </Typography>
                </CardContent>
                <CardActions sx={{ p: 0 }}>
                    {/* <Button size="small" sx={{ color: '#03a84e' }}>Share</Button>
                    <Button size="small" sx={{ color: '#03a84e' }}> Learn More</Button> */}
                    <Grid container>
                        <Grid item xs={12} md={6} sx={{ backgroundColor: '#04293a' }}>
                            <Button sx={{ color: '#fff', width: 1, border: '2px solid #04293a' }} className="btn-card-1">
                                <span style={{ display: 'flex', alignItems: 'center' }}> <BsFillCartCheckFill style={{ marginRight: 5, fontSize: 18 }} /> Buy</span>
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ backgroundColor: '#c39052' }}>
                            <Button sx={{ color: '#fff', width: 1, border: '2px solid #c39052' }} className="btn-card-2">
                                Suggest a price
                            </Button>
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
        </Grid >
    );
};

export default CardComponent;