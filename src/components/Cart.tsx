import React , {useContext} from "react";
import { CartContext } from "../context/cart-context";
import CartItem from "./CartItem";

const Cart = () => {
    const [cartItems,setCartItems] = useContext(CartContext);
    let totalPrice = 0;
    for(const x in cartItems){
        totalPrice += cartItems[x].price;
    }

    return (
        <div>
            {
                cartItems.map((value) => {
                   return <CartItem 
                   key = {value.id}
                   id = {value.id}
                   image={value.image} 
                   title={value.title}
                   price={value.price}
                   />
                  
                })
            }
             
            <p>
                Items in Cart : {cartItems.length}
            </p>
            <p>
                Total Price : {totalPrice}
            </p>
        </div>
    )
}
export default Cart