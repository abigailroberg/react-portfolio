import { Grid } from '@mui/material'
import React from 'react'
import Nav from '../Nav'

function Header() {
    return <div>
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <h1>abigail roberg</h1>
            </Grid>
            <Grid item xs={2} />
            <Grid item xs={7}>
                <Nav />
            </Grid>
        </Grid>
    </div>
}

export default Header