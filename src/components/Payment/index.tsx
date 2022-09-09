import React, { useContext, useState } from 'react';
import { CheckoutContext } from '../../context/checkout-context';

import PaymentMethods from '../../data/PaymentMethodsData'
import OnlinePayment from './online'
import BankPayment from './transfer'
const payments = PaymentMethods;

function PaymentMethodsList() {
    const [checkoutItems, setCheckoutItems] = useContext(CheckoutContext);
    const changePaymentMethod = (event) => {
        const payment_id = event.target.value;
        let payment_obj = {}
        payments.map((payment)=>{
            if(payment.id == payment_id){
                payment_obj = payment
            }
        })
     
        if(payment_id == 1){
            setCheckoutItems({...checkoutItems,onlinePayment:false})
        } else {
            setCheckoutItems({...checkoutItems,
                onlinePayment:true,
                paymentMethod : payment_obj
            })
        }
    }
    return (
        <div className='payment'>
            <h2>Payment Methods</h2>
            <select name="PaymentMethods" required>
            <option selected disabled>Select a Method</option>
                {
                    PaymentMethods.map((item) => {
                        return <option onClick={changePaymentMethod}  value={item.id}>{item.title}</option>
                    })
                }

            </select>
            {checkoutItems.onlinePayment && <OnlinePayment />}
            {!checkoutItems.onlinePayment && <BankPayment />}
        </div>
    )
}

export default PaymentMethodsList
