import { useState,useContext } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CartContext } from '../../context/cart-context';

import Card from '../../components/CardComponent'
import products from '../../data/ProductsData'
import ProductData from '../../data/ProductsData'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import Button from '@mui/material/Button';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function ProductShow() {
  const [cartItems,setCartItems] = useContext(CartContext)

  const [searchParams, setSearchParams] = useSearchParams();
  const slug = searchParams.get("slug");
  let productData = {}
  products.map((product)=>{
    if(product.slug == slug){
      console.log(product)
      productData =  product
    }
  })
  const addToCart = () => {
    const product = {
      id : productData.id,
      image : productData.image[0],
      title : productData.title,
      quantity : 1,
      price : productData.discountPrice
    }
    console.log(product)

    setCartItems((lastProducts) => {
      if(lastProducts.length == 0){
        lastProducts.push(product)
      }

      let isExist = false;
      let isExistIndex;
      lastProducts.map((item,index)=>{
        if(item.id == product.id){
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


  // const [searchParams , setSearchParams] = useSearchParams();
  // const param = searchParams.get('id');
  // let product;
  // for(const x in ProductData){
  //   if(ProductData[x].id == parseInt(param)){
  //        product = ProductData[x]

  //   }
  // }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
            <img src={productData.image[0]} alt="" style={{ width: "100%" }} />
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <h1>{productData.title}</h1>
            <p>{productData.description}</p>
            <del>{productData.price}</del>
            <h3>${productData.discountPrice}</h3>
            <Button onClick={addToCart} variant="outlined" href="#outlined-buttons">
              Add to cart
            </Button>
          </Item>
        </Grid>

      </Grid>
    </Box>
  );
}
const itemData = [

];
export default ProductShow
