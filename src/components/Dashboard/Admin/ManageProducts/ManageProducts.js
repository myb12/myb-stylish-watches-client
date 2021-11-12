import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TableComponent from '../../../Table/TableComponent';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleProductDelete = (id) => {
        if (window.confirm('Do you really want to delete the order?')) {
            fetch(`http://localhost:5000/products/${id}`, {
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

    return (
        <div>
            <Typography variant="h4" className="title">Manage All Products</Typography>
            <TableComponent forManageProducts products={products} handleProductDelete={handleProductDelete} />
        </div>
    );
};

export default ManageProducts;