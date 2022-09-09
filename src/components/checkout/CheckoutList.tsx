import React, { useContext, useState } from 'react';
// Shared
import { CartContext } from '../../context/cart-context';
import { CheckoutContext } from '../../context/checkout-context';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableFooter } from '@mui/material';

function CheckoutList() {
    const [cartItems, setCartItems] = useContext(CartContext);
    const [checkoutItems, setCheckoutItems] = useContext(CheckoutContext);
    let shipping_price = checkoutItems.shipping.price
    let totalPrice = shipping_price ? shipping_price : 0;
    cartItems.map((item) => {
        totalPrice += item.price * item.quantity
    })
    return (
        <div className='checkoutList'>
            <h2>Items</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead style={{ "backgroundColor": "gray", "color": "white" }}>
                        <TableRow>
                            <TableCell>Item</TableCell>
                            <TableCell align="right">Quantity</TableCell>
                            <TableCell align="right">Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cartItems.map((item) => (
                            <TableRow
                                key={item.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">

                                    {item.title}

                                </TableCell>
                                <TableCell align="right">
                                    {item.quantity}

                                </TableCell>
                                <TableCell align="right">
                                    ${(item.price * item.quantity)}
                                </TableCell>
                            </TableRow>
                        ))}
                        <TableRow>
                            <TableCell>Shipping :
                                {checkoutItems.shipping.description}
                            </TableCell>
                            <TableCell colSpan={2} align="right">${checkoutItems.shipping.price}</TableCell>
                        </TableRow>
                    </TableBody>
                    <TableFooter>
                        <TableCell>Total Price</TableCell>
                        <TableCell colSpan={2} align="right">
                            <h2>${totalPrice}</h2>
                        </TableCell>
                    </TableFooter>
                </Table>
            </TableContainer>
        </div>
    )
}

export default CheckoutList
