import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { BASE_URL } from '../../../../config/config.js';
import TableComponent from '../../../Table/TableComponent';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const history = useHistory()

    useEffect(() => {
        fetch(`${BASE_URL}/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDelete = (id) => {
        if (window.confirm('Do you really want to delete the product?')) {
            fetch(`${BASE_URL}/products/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining);
                    }
                });
        }
    }

    const handleAddProduct = () => {
        history.push('/dashboard/addProduct');
    }

    return (
        <div>
            <Typography variant="h4" className="title">Manage All Products</Typography>
            <Box style={{ display: 'flex', justifyContent: 'end', marginBottom: 10 }}>
                <Button className="btn-regular" onClick={handleAddProduct}>Add product</Button>
            </Box>
            <TableComponent forManageProducts products={products} handleDelete={handleDelete} />
        </div>
    );
};

export default ManageProducts;