import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import React from "react"

function Project(project) {
    return <Card>
        <CardContent className="card">
            <Typography variant="h5"> 
                {project.title}
            </Typography>
            <CardMedia
                component='img'
                alt={project.img}
                src={require(`../../assets/img/pic.jpg`)}
                height='200'
            />
            <Typography>
               {project.desc}
            </Typography>
        </CardContent>
    </Card>
}

export default Project