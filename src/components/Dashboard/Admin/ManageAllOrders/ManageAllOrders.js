import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TableComponent from '../../../Table/TableComponent';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])
    console.log(allOrders);
    return (
        <div>
            <Typography variant="h4" className="title">Manage All Orders</Typography>
            <TableComponent forAdmin allOrders={allOrders} />
        </div>
    );
};

export default ManageAllOrders;