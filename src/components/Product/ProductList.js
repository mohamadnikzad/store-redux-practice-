import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'

const ProductList = () => {
    const products = useSelector(state => state.product)
    console.log(products)

    const productss = products?.map(product =>
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Product product={product} />
        </Grid>)


    return (
        <>
            <Typography className='page__title' gutterBottom variant='h2'>ProductList</Typography>
            <Grid container justify="center" spacing={4}>
                {productss}
            </Grid>

        </>
    )
}

export default ProductList

