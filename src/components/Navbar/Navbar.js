import { AppBar, Badge, Container, IconButton, Toolbar, Typography } from '@material-ui/core'
import { ShoppingBasket } from '@material-ui/icons'
import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <AppBar color='inherit' position='sticky'>
            <Container>
                <Toolbar>
                    <Typography variant='h6'>HALAL KALA</Typography>
                    <IconButton className='basket__btn'>
                        <Badge color='secondary' badgeContent={4}>
                            <ShoppingBasket />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>

    )
}

export default Navbar
