import { Grid } from "@mui/material"
import React from "react"
import Project from "../Project"

function Portfolio() {
    return <div>
        <Grid container rowSpacing={6} columnSpacing={6} justifyContent='center'>
            <Grid item xs={12} sm={12} md={6}>
                <Project className='card'/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <Project />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <Project />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <Project />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <Project />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <Project />
            </Grid>
        </Grid>
        </div>
}

export default Portfolio