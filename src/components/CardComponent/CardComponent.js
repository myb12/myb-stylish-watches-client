import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import './CardComponent.css';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { Box } from '@mui/system';
import { useHistory } from 'react-router';

const CardComponent = ({ product }) => {
    const { _id, title, price, imgURL, rating, description } = product;

    const history = useHistory();

    const handlePurchase = (id) => {
        history.push(`/purchase/${id}`);
        window.scrollTo(0, 0);
    }

    return (
        <Grid item xs={12} sm={6} md={4} className="card-container">
            <Card className="card">
                <Box sx={{ display: 'flex', justifyContent: 'center' }} className="image-container">
                    <CardMedia
                        component="img"
                        image={imgURL}
                    />
                </Box>
                <CardContent sx={{ pt: 0 }}>
                    <Typography gutterBottom variant="h5" component="div" sx={{ mt: 1 }}>
                        {title}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                        {description}
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 700 }}>
                        {price}
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: 14, mt: 3 }}>
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                            <AiFillStar style={{ marginRight: 5, color: '#c39052' }} /> {rating}(188)
                        </span>
                    </Typography>
                </CardContent>
                <CardActions sx={{ p: 0 }}>
                    <Grid container>
                        <Grid item xs={12} md={6} sx={{ backgroundColor: '#04293a' }}>
                            <Button
                                sx={{ color: '#fff', width: 1, border: '2px solid #04293a' }} className="btn-card-1"
                                onClick={() => handlePurchase(_id)}
                            >
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