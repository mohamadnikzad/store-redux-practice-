import { Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core'
import React from 'react'
import './Product.css'
import { useHistory } from 'react-router-dom'
import { AddCircleOutlineRounded } from '@material-ui/icons'
import { motion } from "framer-motion"

const Product = ({ product }) => {
    let str = product.title
    let str1 = str.split(" ")
    let productTitle = `${str1[0]}  ${str1[1]}  ${str1[2]}`
    const histroy = useHistory()
    const productDetailHandler = () => {
        histroy.push(`/productDetail/${product.id}`)
    }

    return (
        <motion.div layout>
            <Card className='product__card' >
                <CardActionArea onClick={productDetailHandler}>
                    <CardMedia image={product.image} title={product.title} className='product__img' />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component='h2' >
                            {productTitle}
                        </Typography>
                        <Typography gutterBottom variant="h6" className='product__price' >
                            Price : ${product.price}
                        </Typography>
                        <Typography className='product__desc' variant="body1" color="textSecondary" component="p">
                            Category : {product.category}
                        </Typography>

                    </CardContent>

                </CardActionArea>
                <CardActions >
                    <IconButton color='primary'  >
                        <AddCircleOutlineRounded />
                        <Typography variant='body2'>Add To Basket</Typography>
                    </IconButton>
                </CardActions>
            </Card>
        </motion.div>
    )
}

export default Product
