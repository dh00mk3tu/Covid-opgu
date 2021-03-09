import React from 'react';
import {Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css'
import Countup from 'react-countup';

const Cards = ({data :{confirmed, recovered, deaths, lastUpdate}}) => {
    // console.log(confirmed);
    if (!confirmed) {
        return "Fetching Data...";
    }
    return (
        <div className = {styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Infected 
                        </Typography>
                        <Countup 
                            start={0}
                            end={confirmed.value}
                            duration={2.5}
                            separator={","}
                        />
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Humans Infected with Covid -19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Recovered 
                        </Typography>
                        <Typography variant="h5">{recovered.value}</Typography>
                        <Typography color="textSecondary">Real Data</Typography>
                        <Typography variant="body2">Number of Humans Recovered from Covid -19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant="h5">{deaths.value}</Typography>
                        <Typography color="textSecondary">Real Data</Typography>
                        <Typography variant="body2">Number of Humans Lost to Covid -19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;