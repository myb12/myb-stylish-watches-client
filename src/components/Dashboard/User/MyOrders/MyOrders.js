import { Typography } from '@mui/material';
import React from 'react';
import TableComponent from '../../../Table/TableComponent';

const MyOrders = () => {
    return (
        <div>
            <Typography variant="h4" className="title">My Orders</Typography>
            <TableComponent />
        </div>
    );
};

export default MyOrders;