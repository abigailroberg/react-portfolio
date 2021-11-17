import React from 'react'
import { Grid } from '@mui/material'

function Footer() {
    return <div className='footer'>
        <Grid container spacing={12}>
            <Grid item xs={1}>
                <a href='https://github.com/abigailroberg'>GitHub </a>
            </Grid>
            <Grid item xs={1}>
                <a href='https://www.linkedin.com/in/abigail-roberg/'>LinkedIn</a>
            </Grid>
            <Grid item xs={6} />
            <Grid item xs={4}>
                <p>abigail m roberg - 2021</p>
            </Grid>
        </Grid>
        
    </div>
}

export default Footer