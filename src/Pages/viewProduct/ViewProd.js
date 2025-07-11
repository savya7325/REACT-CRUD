import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';



const ViewProd = () => {
 
  const { id } = useParams();
  const navigate = useNavigate();
  
  const theme = useTheme();
  const [product, setProduct] = useState(null);
  console.log(product, 'single product')

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then(res => setProduct(res.data))
    .catch((error) => {
      console.log("error fetch",error);
    })

  },[id]);
  if (!product) {
     return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
  }

  return (
    // <div>ViewProd</div>


       <Box sx={{ 
      backgroundColor: '#f3f3f3', 
      maxWidth:'1296px' ,
      minHeight:'600px',
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '40px',marginLeft:'130px',marginTop:'80px'
    }}>
    <Card sx={{ display: 'flex', alignItems: "center", padding: 2 ,borderRadius:'12px',gap:'30px'}}>
      {/* <Box sx={{ display: 'flex', flexDirection: 'column' }}> */}
      <CardMedia
        component="img"
        sx={{ width:151 }}
        image={product.image}
        alt="image"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', marginRight: '500px',maxWidth:'300px'}}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {product.title}
          </Typography>
          <Typography
            variant="subtitle1" component="div" sx={{ color: 'rgb(0, 128, 0);',fontSize:'25px' ,fontWeight:'bold' }}
          >
            {product.price}
          </Typography>
            <Typography
            variant="subtitle1" component="div" sx={{ color: '#C71585' }}
          > category:
            {product.category}
          </Typography>
            <Typography
            variant="subtitle1" component="div" sx={{ fontSize:'16px',color:'rgba(51,51,51)',minWidth:'606.66px',maxHeight:'102px'}}
          >
            {product.description}
          </Typography>
            <Link to={'/'}>
          <Button variant="outlined" sx={{color:'#9c27b0',borderColor:'#9c27b0',marginTop:'25px'}}>Go Back</Button>
          </Link>
        </CardContent>
      </Box>
    </Card>
    </Box>
  );
};

export default ViewProd

