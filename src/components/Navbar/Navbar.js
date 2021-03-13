import {
  AppBar,
  Badge,
  Button,
  Container,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import {ShoppingBasket} from '@material-ui/icons';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import BasketItem from './BasketItem';
import './Navbar.css';

const Navbar = () => {
  const basket = useSelector((state) => state.cart.cart);
  const [open, setOpen] = useState(false);
  const basketItems = basket.map((item) => {
    return (
      <Grid item key={item.id}>
        <BasketItem item={item} container spacing={2} />
      </Grid>
    );
  });
  const subtotal = basket.reduce((a, c) => {
    a = a + c.price;
    return a;
  }, 0);
  return (
    <AppBar color="inherit" position="sticky">
      <Container>
        <Toolbar>
          <Typography variant="h6">HALAL KALA</Typography>
          <IconButton className="basket__btn" onClick={() => setOpen(!open)}>
            <Badge color="secondary" badgeContent={basket.length}>
              <ShoppingBasket />
            </Badge>
          </IconButton>
          <Drawer
            anchor="right"
            open={open}
            onClose={() => setOpen(false)}
            className="drawer"
          >
            {basket.length > 0 ? (
              <Grid container direction="column" spacing={2}>
                <Typography className="drawer__subtotal" variant="h5">
                  Sub Total : $ {subtotal}
                </Typography>

                {basketItems}
                <Button variant="contained" color="primary">
                  CHECK OUT
                </Button>
              </Grid>
            ) : (
              <Typography className="drawer__subtotal" variant="h5">
                Basket is empty
              </Typography>
            )}
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
