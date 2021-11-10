import { Typography } from '@mui/material';
import React from 'react';
import TableComponent from '../../../Table/TableComponent';

const ManageAllOrders = () => {
    return (
        <div>
            <Typography variant="h4" className="title">Manage All Orders</Typography>
            <TableComponent forAdmin />
        </div>
    );
};

export default ManageAllOrders;