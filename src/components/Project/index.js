import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import React from "react"

function Project() {
    return <Card>
        <CardContent className="card">
            <CardMedia
                component='img'
                image='../assets/coffe,jpg'
                alt='alt text'
            />
            <Typography variant="h5">
                Project Title
            </Typography>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
        </CardContent>
    </Card>
}

export default Project