
import React , {useContext} from 'react';
import { CheckoutContext } from '../../context/checkout-context';

const ShippingItem = (props) => {
    const [checkoutItems, setCheckoutItems] = useContext(CheckoutContext)
    const changeShipping = () => {
        //checkoutItems[0].test()
        setCheckoutItems({...checkoutItems,shipping:props})
    }
    return (
        <option  value={props.index} onClick={changeShipping}>{props.title}</option>
    )
}
export default ShippingItem