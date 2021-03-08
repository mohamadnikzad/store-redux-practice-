import {Grid, Paper, Tab, Tabs, Typography} from '@material-ui/core';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Product from './Product';
const ProductList = () => {
  const products = useSelector((state) => state.products.product);
  const [category, setCategory] = useState('all');
  const handleChange = (e, newCategory) => {
    setCategory(newCategory);
  };

  let filterdProducts;
  switch (category) {
    case 'men clothing':
      filterdProducts = products.filter(
        (product) => product.category === 'men clothing'
      );
      break;
    case 'women clothing':
      filterdProducts = products.filter(
        (product) => product.category === 'women clothing'
      );
      break;
    case 'jewelery':
      filterdProducts = products.filter(
        (product) => product.category === 'jewelery'
      );
      break;
    case 'electronics':
      filterdProducts = products.filter(
        (product) => product.category === 'electronics'
      );
      break;
    default:
      filterdProducts = products;
      break;
  }

  const pr = filterdProducts?.map((product) => (
    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
      <Product layout product={product} />
    </Grid>
  ));
  console.log(filterdProducts);
  console.log(category);
  return (
    <>
      <Typography className="page__title" gutterBottom variant="h2">
        ProductList
      </Typography>
      <Paper style={{marginBottom: 15}}>
        <Tabs
          value={category}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
        >
          <Tab label="All" value="all" />
          <Tab label="men clothing" value="men clothing" />
          <Tab label="women clothing" value="women clothing" />
          <Tab label="jewelery" value="jewelery" />
          <Tab label="electronics" value="electronics" />
        </Tabs>
      </Paper>

      <Grid container justify="center" spacing={4}>
        {pr}
      </Grid>
    </>
  );
};

export default ProductList;
