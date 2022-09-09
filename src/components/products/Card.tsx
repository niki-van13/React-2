import React , {useContext,useEffect} from 'react';
import { CartContext } from '../../context/cart-context';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {Link} from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

let products_id = []
let carts = []


export default function MUICard(props) {
  const [cartItems,setCartItems] = useContext(CartContext)
  // useEffect(() => {
  //   carts = cartItems

  // });






  // Add To Cart Event
  const addToCart = () => {
    const product = {
      id : props.id,
      image : props.image[0],
      title : props.title,
      quantity : 1,
      price : props.discountPrice
    }

    setCartItems((lastProducts) => {
      if(lastProducts.length == 0){
        lastProducts.push(product)
      }

      let isExist = false;
      let isExistIndex;
      lastProducts.map((item,index)=>{
        if(item.id == props.id){
          isExist = true;
          isExistIndex = index;
          console.log(index)
          //lastProducts[index].quantity++
        }
      })
      if(isExist == false){
        lastProducts.push(product)
      }
    console.log(isExist)


      return [...lastProducts]
    })


    
  
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.image[0]}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className="card-title">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <del>${props.price}</del>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span>${props.discountPrice}</span>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={'show?slug='+props.slug}>
          <Button size="small" color="primary">
            Show More...
          </Button>
        </Link>
        <ShoppingCartIcon onClick={addToCart}></ShoppingCartIcon>

      </CardActions>
    </Card>
  );
}
