import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TableComponent from '../../../Table/TableComponent';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState();
    const [isShipped, setIsShipped] = useState(false);

    useEffect(() => {
        fetch('https://secret-anchorage-33116.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [isShipped])

    const handleShip = (id) => {
        fetch(`https://secret-anchorage-33116.herokuapp.com/orders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount > 0) {
                    setIsShipped(!isShipped);
                }
            })
    }

    const handleDelete = (id) => {
        if (window.confirm('Do you really want to delete the order?')) {
            fetch(`https://secret-anchorage-33116.herokuapp.com/my-orders/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = allOrders.filter(order => order._id !== id);
                        setAllOrders(remaining);
                    }
                });
        }
    }

    return (
        <div>
            <Typography variant="h4" className="title">Manage All Orders</Typography>
            <TableComponent forAdmin allOrders={allOrders} handleShip={handleShip} handleDelete={handleDelete} />
        </div>
    );
};

export default ManageAllOrders;