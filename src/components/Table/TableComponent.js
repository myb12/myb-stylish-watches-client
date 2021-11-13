import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { MdOutlineCancel } from 'react-icons/md';
import { Button } from '@mui/material';
import { Box } from '@mui/system';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#c39052',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


const TableComponent = ({ forAdmin, forManageProducts, myOrders, handleDelete, allOrders, products, handleShip }) => {

    return (
        <TableContainer component={Paper} sx={{ maxWidth: '85vw' }}>
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        {
                            forAdmin && <><StyledTableCell align="left">Name</StyledTableCell>
                                <StyledTableCell align="left">Email</StyledTableCell></>
                        }
                        <StyledTableCell>Product Name</StyledTableCell>
                        <StyledTableCell align="left">Price</StyledTableCell>
                        {
                            !forManageProducts && <StyledTableCell align="left">Order Status</StyledTableCell>
                        }

                        <StyledTableCell align="left">Image</StyledTableCell>
                        <StyledTableCell align="left">Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* table data for my orders  */}
                    {myOrders?.map((order) => (
                        <StyledTableRow key={order._id}>
                            <StyledTableCell component="th" scope="row">
                                {order.title}
                            </StyledTableCell>

                            <StyledTableCell align="left">
                                {order.price}
                            </StyledTableCell>

                            <StyledTableCell align="left" >
                                {order.orderStatus}
                            </StyledTableCell>

                            <StyledTableCell align="left">
                                <img height="60" width="60" src={order.imgURL} alt="" />
                            </StyledTableCell>

                            <StyledTableCell align="left">
                                <MdOutlineCancel onClick={() => handleDelete(order._id)} style={{ color: '#dc3545', fontSize: 30, cursor: 'pointer' }} />
                            </StyledTableCell>

                        </StyledTableRow>
                    ))}

                    {/* table data for all orders  */}
                    {allOrders?.map((order) => (
                        <StyledTableRow key={order._id}>
                            <StyledTableCell component="th" scope="row">
                                {order.name}
                            </StyledTableCell>

                            <StyledTableCell align="left">
                                {order.email}
                            </StyledTableCell>

                            <StyledTableCell align="left" >
                                {order.title}
                            </StyledTableCell>

                            <StyledTableCell align="left" >
                                {order.price}
                            </StyledTableCell>

                            <StyledTableCell align="left" >
                                {order.orderStatus}
                            </StyledTableCell>

                            <StyledTableCell align="left">
                                <img height="60" width="60" src={order.imgURL} alt="" />
                            </StyledTableCell>

                            <StyledTableCell align="left">
                                <Box style={{ display: 'flex' }}>
                                    <Button onClick={() => handleShip(order._id)} disabled={order.orderStatus === 'Shipped'} className="btn-regular" sx={{ mr: 1, fontSize: 12 }}>Ship</Button>
                                    <MdOutlineCancel onClick={() => handleDelete(order._id)} style={{ color: '#dc3545', fontSize: 30, cursor: 'pointer' }} />
                                </Box>
                            </StyledTableCell>

                        </StyledTableRow>
                    ))}

                    {/* table data for all products  */}
                    {products?.map((product) => (
                        <StyledTableRow key={product._id}>
                            <StyledTableCell component="th" scope="row">
                                {product.title}
                            </StyledTableCell>

                            <StyledTableCell align="left" >
                                {product.price}
                            </StyledTableCell>

                            <StyledTableCell align="left">
                                <img height="60" width="60" src={product.imgURL} alt="" />
                            </StyledTableCell>

                            <StyledTableCell align="left">
                                <MdOutlineCancel onClick={() => handleDelete(product._id)} style={{ color: '#dc3545', fontSize: 30, cursor: 'pointer' }} />
                            </StyledTableCell>

                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableComponent;