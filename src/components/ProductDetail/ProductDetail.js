import { Breadcrumbs, Divider, Grid, IconButton, Typography } from '@material-ui/core'
import { AddCircleOutlineRounded, CategoryRounded, DescriptionRounded } from '@material-ui/icons'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProductDetail } from '../../actions/productActions/productActions'
import { withRouter } from 'react-router'

const ProductDetail = ({ match }) => {
    const product = useSelector(state => state.productDetail)
    const loading = useSelector(state => state.loading)
    const dispatch = useDispatch()
    const productId = match.params.id

    useEffect(() => {
        dispatch(fetchProductDetail(productId))

    }, [dispatch, productId])

    return (
        <>
            <Typography className='page__title' variant='h3' component='h1'>Product Detail</Typography>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" to='/'>Products </Link>
                <Typography color="textPrimary">ProductDetail</Typography>
            </Breadcrumbs>
            {loading ? 'loading...' : product ? (<Grid container justify='center'>
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
                    <IconButton color='primary' >
                        <AddCircleOutlineRounded fontSize='large' />
                        <Typography variant='body1'>Add To Basket</Typography>
                    </IconButton>
                </Grid>
            </Grid>) : 'loading ...'}
        </>
    )
}

export default withRouter(ProductDetail)
