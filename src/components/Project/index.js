import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import React from "react"

function Project(project) {
    return <Card>
        <CardContent className="card">
            <CardMedia
                component='img'
                image={require ('../../assets/coffee.jpg')}
                alt='alt text'
            />
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