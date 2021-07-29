import { Button, makeStyles, Typography, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import AnimeInfo from '../components/AnimeInfo'
import axios from 'axios'

const useStyles = makeStyles(theme => ({
    container: {
        height: '100%',
        width: '100%'
    },
    
}))

const Homepage = () => {
    const classes = useStyles()
    //const [fetchAddress, setFetchAddress] = useState('https://kitsu.io/api/edge/anime')
    const [anime, setAnime] = useState(null)

    const fetchAnime = async () => {
        const api = `https://kitsu.io/api/edge/anime/${Math.floor(Math.random() * 12270)}`
        try {
            const result = await axios.get(api)
            console.log(result.data.data.attributes)
            setAnime(result.data.data.attributes)
        } catch (err){
            const backupAnime = await axios.get(api)
            setAnime(backupAnime.data.data.attributes)
        }
    }
    
    useEffect(() => {
        fetchAnime()
    }, [])


    return(
        <Grid container direction="column" justifyContent="center" className={classes.container}>
            <Grid item xs={12}>
                <Typography variant="h6">
                    About This App
                </Typography>
                <Typography variant="body1">
                    Find your next anime to watch by 
                    pressing the "Get Random Anime!" button! Use the filter options to
                    help you pick a specific genre, rating, and so on!
                </Typography>
            </Grid>
            <Grid item xs={12}>
                {anime ? <AnimeInfo anime={anime}/>: null}
            </Grid>
            <Grid item xs={12} onClick={fetchAnime}>
                <Button variant="contained">
                    Click Here To Shuffle Another Anime
                </Button>
            </Grid>
        </Grid>
    )
}

export default Homepage