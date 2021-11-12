import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TableComponent from '../../../Table/TableComponent';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState();
    const [isShipped, setIsShipped] = useState(false);
    
    useEffect(() => {
        fetch('http://secret-anchorage-33116.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [isShipped])

    const handleShip = (id) => {
        fetch(`http://secret-anchorage-33116.herokuapp.com/orders/${id}`, {
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
    return (
        <div>
            <Typography variant="h4" className="title">Manage All Orders</Typography>
            <TableComponent forAdmin allOrders={allOrders} handleShip={handleShip} />
        </div>
    );
};

export default ManageAllOrders;