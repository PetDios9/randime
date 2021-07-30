import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
    root: {
        background: `linear-gradient(to bottom, rgba(0,0,0,.7), rgba(0,0,0,.7), rgba(0,0,0,.7) 93%)`,
        width: '80vw',
    },
    titleText: {
        textShadow: '1px 1px #919191, 2px 2px #919191, 3px 3px#919191'
    },
    synopsis: {
        overflow: 'auto',
    },
    trailerLinkText: {
        color: '#FFFFFF'
    },
}))

const AnimeInfo = (props) => {
    const classes = useStyles()
    return(
        <div className={classes.root}>
            <Grid 
                container 
                direction="row" 
                justifyContent="center" 
                alignItems="center" 
                spacing={3} 
            >
                <Grid item xs={12} md={4}>
                    <img 
                    src={props.anime.posterImage.small}
                    alt={
                        props.anime.titles.en? 
                        `Poster Image for ${props.anime.titles.en}` :
                        `Poster Image for ${props.anime.titles.en_jp}`
                        } 
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Grid container 
                        direction="column" 
                        justifyContent="center" 
                        alignItems="center"
                        spacing={3}
                        >
                        <Grid item xs={12}>
                            <Typography variant="h4" className={classes.titleText}>
                                {props.anime.titles.en? 
                                    props.anime.titles.en :
                                    props.anime.titles.en_jp
                                    }
                            </Typography>
                            <Typography variant="h5" className={classes.titleText}>
                                {props.anime.titles.ja_jp}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} className={classes.synopsis}>
                            <Typography variant="body1" align="center">
                                <em>Synopsis: </em>
                                <br />
                                <br />
                                {props.anime.synopsis}
                                <br />
                                <br />
                            </Typography>
                            <Typography variant="subtitle1">
                                <em>Release Date: </em>
                                {props.anime.startDate}
                            </Typography>
                            <Typography variant="subtitle1" className={classes.trailerLinkText}>
                                {props.anime.youtubeVideoId != null && props.anime.youtubeVideoId !== "" ? 
                                <a 
                                href={`https://www.youtube.com/watch?v=${props.anime.youtubeVideoId}`} 
                                target='_blank' 
                                rel="noreferrer"
                                    >
                                    <em>Click here to watch a trailer</em>
                                </a>
                                :
                                <em>Trailer Not Available</em>
                                }
                            </Typography>
                            <Typography variant="subtitle1">
                                <em>Type: </em>
                                {props.anime.subtype}
                            </Typography>
                            <Typography variant="subtitle1">
                                <em>Episode Count: </em>
                                {props.anime.episodeCount}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default AnimeInfo