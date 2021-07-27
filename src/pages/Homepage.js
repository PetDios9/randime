import { createStyles, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import AnimeInfo from '../components/AnimeInfo'

const useStyles = makeStyles(theme => ({
    container: {
        height: '100%',
        width: '100%'
    },
    text: {
        color: '#FFFFFF',
    }
}))

const Homepage = () => {
    const classes = useStyles()
    return(
        <div className={classes.container}>
            <div className={classes.text}>
                <Typography variant="h6">
                    About This App
                </Typography>
                <Typography variant="body1">
                    Find your next anime to watch by 
                    pressing the "Get Random Anime!" button! Use the filter options to
                    help you pick a specific genre, rating, and so on!
                </Typography>
            </div>
            <AnimeInfo />
        </div>
    )
}

export default Homepage