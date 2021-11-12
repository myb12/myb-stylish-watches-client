import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import TableComponent from '../../../Table/TableComponent';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        fetch(`http://secret-anchorage-33116.herokuapp.com/my-orders?email=${user.email}`, {
            method: 'POST',
        })
            .then(res => res.json())
            .then(data => {
                setMyOrders(data);
            })
    }, [user.email]);

    const handleDelete = (id) => {
        if (window.confirm('Do you really want to delete the order?')) {
            fetch(`http://secret-anchorage-33116.herokuapp.com/my-orders/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = myOrders.filter(order => order._id !== id);
                        setMyOrders(remaining);
                    }
                });
        }
    }

    return (
        <div>
            <Typography variant="h4" className="title">My Orders</Typography>
            <TableComponent myOrders={myOrders} handleDelete={handleDelete} />
        </div>
    );
};

export default MyOrders;