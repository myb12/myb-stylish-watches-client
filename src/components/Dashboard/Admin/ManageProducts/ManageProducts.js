import { Typography } from '@mui/material';
import React from 'react';
import TableComponent from '../../../Table/TableComponent';

const ManageProducts = () => {
    return (
        <div>
            <Typography variant="h4" className="title">Manage All Products</Typography>
            <TableComponent forManageProducts />
        </div>
    );
};

export default ManageProducts;