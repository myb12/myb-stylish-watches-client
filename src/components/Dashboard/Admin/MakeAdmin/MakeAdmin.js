import { Button, TextField, Typography } from '@mui/material';
import React from 'react';

const MakeAdmin = () => {
    const handleSubmit = e => {
        e.preventDefault();
    }
    const handleEmail = () => { }
    return (
        <div>
            <Typography variant="h4" className="title">Make an Admin</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: '70%' }}
                    onBlur={handleEmail}
                    label="Insert an email to make admin"
                    variant="outlined"
                    type="email"
                />
                <br />
                <Button type="submit" sx={{ mt: 1 }} className="btn-regular">Make Admin</Button>
            </form>
        </div >
    );
};

export default MakeAdmin;