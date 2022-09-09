import React , {createContext,useState} from "react";
export const CheckoutContext = createContext([]);
// Providers
export const CheckoutProvider = (props) => {
    const [checkoutItems,setCheckoutItems] = useState({
        fullname : '',
        email : '',
        mobile : '',
        address : '',
        total_amount : 0,
        shipping : {},
        onlinePayment : true,
        paymentMethod : {},
        onlinePaymentMethod : {},
        offlinePaymentMethod : {},
    })
    return (
        <CheckoutContext.Provider
        value={[checkoutItems,setCheckoutItems]}
        >
            {props.children}
        </CheckoutContext.Provider>
    )
}