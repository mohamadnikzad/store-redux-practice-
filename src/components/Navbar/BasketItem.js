import React from 'react';
import {motion} from 'framer-motion';
import {Grid, Paper, Typography} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import {useDispatch} from 'react-redux';
import {removeCartItem} from '../../redux/slices/cart/cartSlice';

const BasketItem = ({item}) => {
  const dispacth = useDispatch();
  let str = item.title;
  let str1 = str.split(' ');
  let productTitle = `${str1[0]}  ${str1[1]}  ${str1[2]}`;
  return (
    <motion.div layout>
      <Paper
        style={{
          paddingLeft: 10,
          paddingRight: 10,
          marginRight: 10,
          marginLeft: 10,
        }}
      >
        <Grid
          item
          container
          spacing={1}
          justify="flex-start"
          alignItems="center"
          direction="row"
        >
          <Grid item>
            <img src={item.image} alt={item.title} width="100px" />
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="body2">
              {productTitle}
            </Typography>
            <Typography gutterBottom variant="subtitle1">
              Price :$ {item.price}
            </Typography>
            <Button
              onClick={() => dispacth(removeCartItem(item.id))}
              variant="contained"
              color="secondary"
              size="small"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </motion.div>
  );
};

export default BasketItem;
