import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
    root: {
        margin: '3% 5% 0% 5%',
    },
    titleText: {
        textShadow: '1px 1px #919191, 2px 2px #919191, 3px 3px#919191'
    },
    synopsis: {
        overflow: 'auto'
    }
}))

const AnimeInfo = (props) => {
    const classes = useStyles()
    console.log(props.anime)
    return(
        <div className={classes.root}>
            <Grid container direction="row" justifyContent="center" spacing={0} >
                <Grid item xs={4}>
                    <img 
                    src={props.anime.posterImage.medium}
                    alt={
                        props.anime.titles.en? 
                        `Poster Image for ${props.anime.titles.en}` :
                        `Poster Image for ${props.anime.titles.en_jp}`} 
                    />
                </Grid>
                <Grid item xs={8}>
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
                            <Typography variant="body1">
                                <em>Synopsis:</em>
                                <br />
                                <br />
                                {props.anime.synopsis}
                            </Typography>
                            <Typography variant="subtitle1">
                                {props.anime.youtubeVideoId != null && props.anime.youtubeVideoId !== "" ? 
                                <a href={`https://www.youtube.com/watch?v=${props.anime.youtubeVideoId}`} 
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