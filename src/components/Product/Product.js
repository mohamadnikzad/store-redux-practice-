import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import React from 'react';
import './Product.css';
import {useHistory} from 'react-router-dom';
import {AddCircleOutlineRounded} from '@material-ui/icons';
import {motion} from 'framer-motion';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../redux/slices/cart/cartSlice';

const Product = ({product}) => {
  const dispatch = useDispatch();
  let str = product.title;
  let str1 = str.split(' ');
  let productTitle = `${str1[0]}  ${str1[1]}  ${str1[2]}`;
  const histroy = useHistory();
  const productDetailHandler = () => {
    histroy.push(`/productDetail/${product.category}/${product.id}`);
  };

  const addTobasketHandler = () => {
    dispatch(addToCart(product));
  };

  return (
    <motion.div layout>
      <Card className="product__card">
        <CardActionArea onClick={productDetailHandler}>
          <CardMedia
            image={product.image}
            title={product.title}
            className="product__img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {productTitle}
            </Typography>
            <Typography gutterBottom variant="h6" className="product__price">
              Price : ${product.price}
            </Typography>
            <Typography
              className="product__desc"
              variant="body1"
              color="textSecondary"
              component="p"
            >
              Category : {product.category}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            color="primary"
            variant="contained"
            startIcon={<AddCircleOutlineRounded />}
            fullWidth
            onClick={addTobasketHandler}
          >
            ADD TO BASKET
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
};

export default Product;
