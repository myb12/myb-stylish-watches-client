import { Alert, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { BASE_URL } from '../../../../config/config.js';

const MakeAdmin = () => {
    const [success, setSuccess] = useState(false);
    const [email, setEmail] = useState('');
    const token = sessionStorage.getItem('jwt');

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault();

        const user = { email }
        fetch(`${BASE_URL}/users/admin`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })
    }

    return (
        <div>
            <Typography variant="h4" className="title">Make an Admin</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    required
                    sx={{ width: '70%' }}
                    onBlur={handleEmail}
                    label="Insert an email to make admin"
                    variant="outlined"
                    type="email"
                />
                <br />
                <Button type="submit" sx={{ mt: 1 }} className="btn-regular">Make Admin</Button>
            </form>
            {success && <Alert severity="success" sx={{ mt: 2 }}>Admin made successfully!</Alert>}
        </div >
    );
};

export default MakeAdmin;