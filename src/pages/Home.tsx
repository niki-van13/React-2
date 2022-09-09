
import { useState } from 'react'
import Card from '../components/products/Card'
import ProductData from '../data/ProductsData'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
const products = ProductData
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



import ButtonBase from '@mui/material/ButtonBase';

const images = [
  {
    url: '/src/assets/image/prova5.jpg',
    title: 'Luxury',
    width: '40%',
  },
  {
    url: '/src/assets/image/prova2.jpg',
    title: 'Simplicity',
    width: '30%',
  },
  {
    url: '/src/assets/image/prova3.jpg',
    title: 'Authenticity',
    width: '30%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 200,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));



function Home() {

  return (
    <>
     <Box  sx={{ width: '100%'}}>
      <Grid container>
        <Grid item xs={12}>
          <img src="https://blog.stuller.com/wp-content/uploads/2020/02/2020-Vday-jewelry-trends_Header-Banner.jpg"  style={{width:"100%"}}/>
        </Grid>
      </Grid>
    </Box>
    
  
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  



















    <Box  sx={{ width: '100%', marginTop: '30px' }}>
      <h2 style={{textAlign: "center"}}>New Products</h2>
      <Grid container rowSpacing={2} spacing={{ xs: 1, md: 1 }}>
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
    </>
  )
}


export default Home
