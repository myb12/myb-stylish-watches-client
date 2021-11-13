import { Alert, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [success, setSuccess] = useState('');
    const [email, setEmail] = useState('');
    const token = sessionStorage.getItem('jwt');

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault();

        const user = { email }
        fetch('https://secret-anchorage-33116.herokuapp.com/users/admin', {
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
                    setSuccess('success');
                } else {
                    setSuccess('fail');
                }
            })
    }

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
            {success === 'success' && <Alert severity="success" sx={{ mt: 2 }}>Admin made successfully!</Alert>}
            {success === 'fail' && <Alert severity="error" sx={{ mt: 2 }}>Sorry, No user with this email!</Alert>}
        </div >
    );
};

export default MakeAdmin;