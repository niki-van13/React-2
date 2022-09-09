
import React, { useContext, useState } from 'react';
import { CheckoutContext } from '../../context/checkout-context';

import TextField from '@mui/material/TextField';


const Fields = ['cardName', 'cardNumber', 'expireDate', 'cvc'];
const OnlinePayment = () => {
    const [checkoutItems, setCheckoutItems] = useContext(CheckoutContext);
    const onlinePaymentDetails = (event)=>{
        let detail = {}

        detail[event.target.name] = event.target.value;

    }

    return (
        <>
            {
                Fields.map((field, indx) => {
                    return <TextField
                    onInput={onlinePaymentDetails}
                    style={{"width":"100%","marginBottom":"5px"}}
                        id="outlined-basic"
                        required
                        label={field}
                        name={field}
                        variant="outlined" />
                })
            }
        </>
    )
}
export default OnlinePayment