import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/AuthProvider';
import { styled } from "@mui/material/styles";
import Badge, { badgeClasses } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useCart } from "../Context/cartProvider";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";


const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -8px;
    right: -6px;
  }
`;

export default function ButtonAppBar() {
  
  const { logout } = useAuth()
  const { cartItems } = useCart(); // get cart data
  const navigate = useNavigate();
  const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor:"pink"}} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h5" component="div" sx={{ flexGrow: 1 , color:"#C2185B"}}>
            Beautiva
          </Typography>

          <Button color="inherit" style={{paddingRight:40}}> Home</Button>
         <IconButton>
  <FavoriteIcon fontSize="large" style={{marginRight:30}}/>
</IconButton>
          

           <IconButton onClick={() => navigate("/cart")}>
      <ShoppingCartIcon fontSize="large" />
      <CartBadge badgeContent={totalItems} color="primary" style={{marginRight:60}} />
    </IconButton>

            <Button color="inherit" variant="outlined" onClick={logout} style={{paddingLeft:10}}>LogOut</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}