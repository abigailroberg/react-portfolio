import React from "react"
import { Grid } from '@mui/material'

function Nav() {
    return <nav>
        <ul>
        <Grid container spacing={4}>
            <Grid item xs={3}>
                <li>about</li>
            </Grid>
            <Grid item xs={3}>
                <li>portfolio</li>
            </Grid>
            <Grid item xs={3}>
                <li>contact</li>
            </Grid>
            <Grid item xs={3}>
                <li>resume</li>
            </Grid>
        </Grid>
        </ul>
    </nav>
}

export default Nav