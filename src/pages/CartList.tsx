import React , {useContext} from "react";
import { CartContext } from "../context/cart-context";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableFooter } from "@mui/material";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CartItem from "../components/CartItem";




const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
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



export default function CartList() {
    const [cartItems,setCartItems] = useContext(CartContext);
    let totalPrice = 0;
    for(const x in cartItems){
      
        totalPrice += cartItems[x].price * cartItems[x].quantity;


    }
    

  return (
   
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Item</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            <StyledTableCell align="right">Total Price</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
          {
            cartItems.map((item)=>{
             return  <TableRow><CartItem key={item.id} 
             id={item.id} 
             image={item.image} 
             title={item.title} 
             price={item.price} 
             quantity={item.quantity}
             /></TableRow>
            })
          }
         
        </TableBody>
        <TableFooter>
          <StyledTableCell component="th" scope="row">
            <h3>Total : ${totalPrice}</h3>
            <Link to="/checkout">
            <Button variant="contained">Checkout</Button>
            </Link>
          </StyledTableCell>
          
        </TableFooter>
      </Table>
    </TableContainer>
  );
}