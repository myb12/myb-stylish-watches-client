import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TableComponent from '../../../Table/TableComponent';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    console.log(orders);
    return (
        <div>
            <Typography variant="h4" className="title">Manage All Orders</Typography>
            <TableComponent forAdmin />
        </div>
    );
};

export default ManageAllOrders;