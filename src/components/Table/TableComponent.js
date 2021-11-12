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


const TableComponent = ({ forAdmin, forManageProducts, myOrders, handleDelete, allOrders }) => {
    return (
        <TableContainer component={Paper} sx={{ maxWidth: '90vw' }}>
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
                    {myOrders?.map((order) => (
                        <StyledTableRow key={order._id}>
                            <StyledTableCell component="th" scope="row">
                                {order.title}
                            </StyledTableCell>
                            <StyledTableCell align="left">{order.price}</StyledTableCell>
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
                                <br />
                                <Button className="btn-regular" sx={{ mt: 1 }}>Approve</Button>
                            </StyledTableCell>

                            <StyledTableCell align="left">
                                <img height="60" width="60" src={order.imgURL} alt="" />
                            </StyledTableCell>

                            <StyledTableCell align="left">
                                <MdOutlineCancel onClick={() => handleDelete(order._id)} style={{ color: '#dc3545', fontSize: 30, cursor: 'pointer' }} />
                            </StyledTableCell>

                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableComponent;