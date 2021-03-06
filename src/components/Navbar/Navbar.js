import { AppBar, Badge, IconButton, Toolbar, Typography } from '@material-ui/core'
import { ShoppingBasket } from '@material-ui/icons'
import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <AppBar color='inherit' position='sticky'>
            <Toolbar>
                <Typography edge='start' variant='h6'>STORE</Typography>
                <IconButton className='basket__btn'>
                    <Badge color='secondary' badgeContent={4}>
                        <ShoppingBasket />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>

    )
}

export default Navbar
