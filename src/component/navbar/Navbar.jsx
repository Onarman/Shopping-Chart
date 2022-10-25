import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import logoOn from "../../assets/logoOn.jpg"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

export default function ButtonAppBar({totalProduct}) {
  return (
      <AppBar position="fixed" color="inherit" sx={{borderBottom:"1px solid rgba(0,0,0,0.12)"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src={logoOn} height="45px"></img>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NarmanStore
          </Typography>

          <Badge badgeContent={totalProduct} color="error">
                <ShoppingCartIcon/>
          </Badge>
          
        </Toolbar>
      </AppBar>
  );
}
