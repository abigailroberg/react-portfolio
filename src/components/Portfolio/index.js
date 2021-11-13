import { Grid } from "@mui/material"
import React from "react"
import Project from '../Project'
const projects = require('../../assets/projects/projects.json')

function Portfolio() {
    return <div>
        <Grid container rowSpacing={6} columnSpacing={6} justifyContent='center'>
            {projects.map((project, i) => {
                return <Grid item xs={12} sm={12} md={6}>
                        <Project className='card' title={project.title} desc={project.description}/>
                       </Grid> 
            })}  
        </Grid>
        </div>
}

export default Portfolio