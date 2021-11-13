import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import React from "react"

function Project() {
    return <Card>
        <CardContent>
            <CardMedia
                component='img'
                image='../assets/coffe,jpg'
                alt='alt text'
                />
            <Typography variant="h5">
                Project Title
            </Typography>
        </CardContent>
    </Card>
}

export default Project