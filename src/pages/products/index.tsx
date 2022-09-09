import React from 'react';
import { useState } from 'react'
import Card from '../../components/products/Card'
import ProductData from '../../data/ProductsData'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const products = ProductData
function ProductIndex() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {
          products.map((product) => {

            return <Grid item xs={12} md={3}><Card
              key={product.id}
              id={product.id}
              price={product.price}
              discountPrice={product.discountPrice}
              slug={product.slug}
              image={product.image}
              title={product.title}
              description={product.description}
            /></Grid>

          })

        }
      </Grid>
    </Box>
  );
}

export default ProductIndex
