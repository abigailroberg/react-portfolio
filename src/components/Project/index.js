import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import React from "react"

function Project(project) {
    return <Card>
        <CardMedia 
                style={{ height: '200', width: '500', padding: '5%' }}
                component='img'
                alt='alt text'
                image='../../assets/img/pic.jpg'
        />
        <CardContent className="card">
            <Typography variant="h5"> 
                {project.title}
            </Typography>
            <Typography>
               {project.desc}
            </Typography>
        </CardContent>
    </Card>
}

export default Project