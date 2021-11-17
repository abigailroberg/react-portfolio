import { Grid } from "@mui/material"
import React from "react"


function About() {
    return <div>
        <Grid container spacing={4}>
            <Grid item xs={3}>
                <img 
                    src={require('../../assets/img/pic.jpg')} 
                    alt='Abigail Roberg sips coffee in front of a brick wall'
                    height='100%' 
                    >
                </img>
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={7}>
                <article>
                    <h3>Problem Solver.</h3>
                    <p>I thrive on tackling tough issues all the way through by breaking down the problem & constantly asking why. During the day, I'm a process improvement & automation project manager at a large tech company, so I'm used to dealing with big, complex problems. Most of the time, I'm juggling multiple workstreams.</p>
                </article>
                <article>
                    <h3>Data Driven.</h3>
                    <p>I make decisions based on the facts and am always looking for concrete numbers to back up assumptions. In 2018, I graduated with a BBA in Data Analytics from Ohio University & use what I learned there every single day. If you're interested in learning more about my approach to data & visualizations, please read my undergraduate thesis project <a href="https://etd.ohiolink.edu/apexprod/rws_olink/r/1501/10?clear=10&p10_accession_num=ouhonors1524826335755109">here</a>, where I explored an analytics backed approach to filling out March Madness brackets through bite-sized visualizations.</p>
                </article>
                <article>
                    <h3>Curious Explorer.</h3>
                    <p>Finding, trying, and learning new things is the most exciting part of life to me. Not one to get stuck in a routine, I like to mix it up & discover what else is out there. It's part of the reason I enrolled in the Coding Boot Camp at The University of Texas - stretching the brain with new skills is just as important as moving the body.</p>
                </article>
            </Grid>
            <Grid item xs={1} />
        </Grid>
    </div>
}

export default About