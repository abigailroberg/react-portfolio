import { Grid } from '@mui/material'
import React from 'react'

function Header(props) {
    const {
        pages = [],
        setCurrentPage
    } = props

    return <div>
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <h1>abigail roberg</h1>
            </Grid>
            <Grid item xs={2} />
            <Grid item xs={7}>
                <nav>
        <ul>
        <Grid container spacing={4}>
            {pages.map((page, i) => {
                return <Grid item xs={3} key={page}>
                <li onClick={() => {setCurrentPage(page)}}>
                    {page}
                </li>
            </Grid>
            })}
        </Grid>
        </ul>
    </nav>
            </Grid>
        </Grid>
    </div>
}

export default Header