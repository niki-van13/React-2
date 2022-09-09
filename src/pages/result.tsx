import React, { useContext, useState } from 'react';
import { CartContext } from "../context/cart-context";
import { CheckoutContext } from '../context/checkout-context';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const ResultPage = () => {
    const [cartItems, setCartItems] = useContext(CartContext);
    const [checkoutItems, setCheckoutItems] = useContext(CheckoutContext);
    console.log(checkoutItems)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={8} md={6}>
                    <Item style={{ "textAlign": "left", "height":"390px", "padding":"90px"}}>
                        <h2>Thank you dear '{checkoutItems.fullname}'</h2>
                        <p>Your Order by E-mail , '{checkoutItems.email}' ,mobile '{checkoutItems.mobile}' and address {checkoutItems.address} has been registered.</p>
                    </Item>
                </Grid>
                <Grid item xs={8} md={6}>
                    <Item style={{ "textAlign": "left" }}>
                        <h5>Order Details</h5>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Item</TableCell>
                                        <TableCell align="right">Quantity</TableCell>
                                        <TableCell align="right">Total Price</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {cartItems.map((item) => (
                                        <TableRow
                                            key={item.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                <img src={item.image} width="30" />
                                                {item.title}
                                            </TableCell>
                                            <TableCell align="right">{item.quantity}</TableCell>
                                            <TableCell align="right">{item.quantity * item.price}</TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <h5>Payment Details</h5>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Method</TableCell>
                                        <TableCell align="right">Name</TableCell>
                                        <TableCell align="right">Card Number</TableCell>
                                        <TableCell align="right">Expire Date</TableCell>
                                        <TableCell align="right">CVC</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow
                                        key={checkoutItems.paymentMethod.title}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {checkoutItems.paymentMethod.title}
                                        </TableCell>
                                        <TableCell align="right">
                                            {checkoutItems.paymentMethod.title}
                                        </TableCell>
                                        <TableCell align="right">
                                            {checkoutItems.onlinePaymentMethod.name}
                                        </TableCell>
                                        <TableCell align="right">
                                        {checkoutItems.onlinePaymentMethod.expireDate}
                                        </TableCell>
                                        <TableCell align="right">
                                        {checkoutItems.onlinePaymentMethod.cvc}
                                        </TableCell>

                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <h5>Shipping Details</h5>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell align="right">Price</TableCell>
                                        <TableCell align="right">Description</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                <TableRow
                                        key={checkoutItems.shipping.title}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {checkoutItems.shipping.title}
                                        </TableCell>
                                        <TableCell align="right">
                                            ${checkoutItems.shipping.price}
                                        </TableCell>
                                        <TableCell align="right">
                                            {checkoutItems.shipping.description}
                                        </TableCell>
                                       

                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ResultPage