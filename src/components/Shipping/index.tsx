import React, { useContext, useState } from 'react';
import { CartContext } from "../../context/cart-context";
import { CheckoutContext } from '../../context/checkout-context';
import ShippingItem from './item';
import Shipping from '../../data/ShippingData'
const shippingMethods = Shipping
function ShippingForm() {
    const [checkoutItems, setCheckoutItems] = useContext(CheckoutContext);

    
    return (
        <div>
            <h2>Shipping</h2>
            <select name="shippingMethods"  required>
                <option selected disabled>Select a Method</option>
                {
                    shippingMethods.map((item,indx) => {
                        return <ShippingItem 
                        key={indx} 
                        id={item.id} 
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        select={item.selected}
                        />
                    })
                }

            </select>
        </div>
    )
}

export default ShippingForm
