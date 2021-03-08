import { Breadcrumbs, Button, Divider, Grid, Typography } from '@material-ui/core'
import { AddCircleOutlineRounded, CategoryRounded, DescriptionRounded } from '@material-ui/icons'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProductByCategory, fetchProductDetail } from '../../actions/productActions/productActions'
import { withRouter } from 'react-router'
import { addToBasket } from '../../actions/basketActions/basketActions'
import Product from '../Product/Product'

const ProductDetail = ({ match }) => {
    const singleProduct = useSelector(state => state.singleProduct)
    const { product, loading } = singleProduct
    const relatedProducts = useSelector(state => state.filterdProduct)
    const { filterdProducts, lloading } = relatedProducts
    const dispatch = useDispatch()
    const productCategory = product?.category
    const productId = match.params.id

    useEffect(() => {
        dispatch(fetchProductDetail(productId))
        dispatch(fetchProductByCategory(productCategory))
    }, [productId, productCategory, dispatch])

    const relatedProductsMap = filterdProducts?.map(item =>
        <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Product product={item} />
        </Grid>)

    return (
        <>
            <Typography className='page__title' variant='h3' component='h1'>Product Detail</Typography>
            <Breadcrumbs gutterBottom aria-label="breadcrumb">
                <Link color="inherit" to='/'>Products </Link>
                <Typography color="textPrimary">ProductDetail</Typography>
            </Breadcrumbs>
            {loading ? 'loading...' : product ? (<><Grid container justify='center'>
                <Grid item xs={12} md={3}>
                    <img src={product.image} alt={product.title} width='200px' />
                </Grid>
                <Grid item xs={12} md={9}>
                    <Typography gutterBottom variant="h4">{product.title}</Typography>
                    <Divider variant='middle' />

                    <Typography gutterBottom variant='h5'><DescriptionRounded /> Product Description</Typography>
                    <Typography edge='start' gutterBottom variant="body2" component='p'> {product.description}</Typography>
                    <Divider variant='middle' />
                    <Typography gutterBottom variant="h5"><CategoryRounded /> Category </Typography>
                    <Typography gutterBottom variant="subtitle2">{product.category}</Typography>

                    <Divider variant='middle' />
                    <Typography gutterBottom variant="h6">Price : ${product.price}</Typography>
                    <Button color='primary' variant='contained' startIcon={<AddCircleOutlineRounded />} size='large' onClick={() => dispatch(addToBasket(product))}>ADD TO BASKET</Button>
                </Grid>
            </Grid>
                <Typography className='page__title' variant='h4'>Related Products</Typography>

                {    !lloading ? <Grid container spacing={4}>
                    {relatedProductsMap}
                </Grid> : "Loading ..."}
            </>
            ) : 'loading ...'}
        </>
    )
}

export default withRouter(ProductDetail)
