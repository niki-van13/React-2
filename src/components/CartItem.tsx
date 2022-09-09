import React , {useContext} from 'react';
import { CartContext } from '../context/cart-context';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableFooter } from "@mui/material";
import Button from '@mui/material/Button'; import { Link } from "react-router-dom";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const CartItem = (props: {
  id: number,
  image: string,
  title: string,
  price: number,
  quantity: number,
}) => {
  const [cartItems,setCartItems] = useContext(CartContext)
  // Add To Cart Event
  const deleteCartItem = (event) => {
    setCartItems((currentState) => {
      currentState.map((item,index)=>{
        if(props.id == item.id){
          currentState.splice(index,1)
        }
      })
      return [...currentState]
    })
  }


  return (
    <>
      <StyledTableCell>
        <img src={props.image} alt={props.title} width="50" style={{"border":"1px solid lightgray","margin":"0 10px"}}/>
        <span>{props.title}</span>
      </StyledTableCell>
      <StyledTableCell align="right">{props.price}</StyledTableCell>
      <StyledTableCell align="right">{props.quantity}</StyledTableCell>
      <StyledTableCell align="right">
        {props.price * props.quantity}
      </StyledTableCell>
      <StyledTableCell align="right">
        <Button variant="outlined" onClick={deleteCartItem}>DELETE</Button>
      </StyledTableCell>
    </>

  )
}


export default CartItem