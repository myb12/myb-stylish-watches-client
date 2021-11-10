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

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const TableComponent = ({ forAdmin, forManageProducts }) => {
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
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            {
                                forAdmin && <><StyledTableCell align="left">Mohammad Yasin</StyledTableCell>
                                    <StyledTableCell align="left">mohammadyasinbappy@gmail.com</StyledTableCell></>
                            }
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="left">{row.calories}</StyledTableCell>
                            {
                                !forManageProducts && <StyledTableCell align="left" >
                                    Pending
                                    {
                                        forAdmin && <><br />
                                            <Button className="btn-regular" style={{ marginTop: 5 }}>Approve</Button></>
                                    }
                                </StyledTableCell>
                            }

                            <StyledTableCell align="left">

                                <img height="60" width="60" src="  https://cdn2.chrono24.com/images/uhren/21179480-zupdskf0ieetp9nqzeazzg2g-Square210.jpg" alt="" />
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                <MdOutlineCancel style={{ color: '#dc3545', fontSize: 30, cursor: 'pointer' }} />
                            </StyledTableCell>

                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableComponent;