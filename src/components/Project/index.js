import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import React from "react"

function Project(project) {
    const {
        title,
        url,
        desc,
        img,
        alt
    } = project


    return <div>
    <Card>
        <CardContent className="card">
            <Typography variant="h5"> 
               <a href={url}>{title}</a>
            </Typography>
            <CardMedia 
                height='200'
                component='img'
                alt={alt}
                src={`../../assets/img/${img}`}
            />
            <Typography>
               {desc}
            </Typography>
        </CardContent>
    </Card>
    </div>
}

export default Project