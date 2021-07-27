import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
    root: {
        padding: '3% 5% 0% 5%',
    },
    titleText: {
        textShadow: '1px 1px #919191, 2px 2px #919191, 3px 3px#919191'
    }
}))

const AnimeInfo = (props) => {
    const classes = useStyles()
    return(
        <div className={classes.root}>
            <Grid container direction="row" justifyContent="center" >
                <Grid item xs={4}>
                    <img 
                    src="https://media.kitsu.io/anime/poster_images/2/medium.jpg?1597696808" 
                    />
                </Grid>
                <Grid item xs={8}>
                    <Grid container 
                        direction="column" 
                        justifyContent="center" 
                        alignItems="center"
                        spacing={3}
                        >
                        <Grid item xs={4}>
                            <Typography variant="h4" className={classes.titleText}>
                                Cowboy Bebop
                            </Typography>
                            <Typography variant="h5" className={classes.titleText}>
                                カウボーイビバップ
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant="body1">
                                In the year 2071, humanity has colonized several of the planets and moons of the solar system leaving the now uninhabitable surface of planet Earth behind. The Inter Solar System Police attempts to keep peace in the galaxy, aided in part by outlaw bounty hunters, referred to as "Cowboys". The ragtag team aboard the spaceship Bebop are two such individuals.
                                Mellow and carefree Spike Spiegel is balanced by his boisterous, pragmatic partner Jet Black as the pair makes a living chasing bounties and collecting rewards. Thrown off course by the addition of new members that they meet in their travels—Ein, a genetically engineered, highly intelligent Welsh Corgi; femme fatale Faye Valentine, an enigmatic trickster with memory loss; and the strange computer whiz kid Edward Wong—the crew embarks on thrilling adventures that unravel each member's dark and mysterious past little by little. 
                                Well-balanced with high density action and light-hearted comedy, Cowboy Bebop is a space Western classic and an homage to the smooth and improvised music it is named after.

                                (Source: MAL Rewrite)
                            </Typography>
                            <Typography variant="subtitle1">
                                <a href="https://www.youtube.com/watch?v=qig4KOK2R2g">
                                    <em>Click here to watch a trailer</em>
                                </a>
                            </Typography>
                            <Typography variant="subtitle1">
                                <em>Episode Count: </em>
                                25
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default AnimeInfo