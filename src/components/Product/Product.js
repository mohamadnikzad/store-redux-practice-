import { Card, CardActionArea, CardContent, CardMedia, Divider, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Product.css'
import { fetchProductDetail } from '../../actions/productActions/productActions'
import { useHistory } from 'react-router-dom'

const Product = ({ product }) => {
    let str = product.title
    let str1 = str.split(" ")
    let productTitle = `${str1[0]}  ${str1[1]}  ${str1[2]}`
    const dispatch = useDispatch()
    const histroy = useHistory()
    const productDetail = useSelector(state => state.productDetail)

    const productDetailHandler = () => {
        dispatch(fetchProductDetail(product.id))
        histroy.push(`/productDetail${product.id}`)
    }

    return (
        <Card className='product__card' onClick={productDetailHandler}>
            <CardActionArea>
                <CardMedia image={product.image} title={product.title} className='product__img' />
                <CardContent>
                    <Typography variant="h5" >
                        {productTitle}
                    </Typography>

                    <Typography className='product__desc' variant="caption" color="textSecondary" component="p">
                        {product.description}
                    </Typography>
                    <Divider className='product__divider' />
                    <Typography variant="subtitle2" className='product__price' >
                        Price : {product.price}$
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Product
