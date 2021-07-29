import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
    headerHeight: theme.mixins.toolbar,
    header: {
        display: 'flex',
       alignItems: "center"
    },
    randimeText: {
        textShadow: '1px 1px #919191, 2px 2px #919191, 3px 3px#919191, 4px 4px #919191'
    }
}))

const Header = () => {
    const classes = useStyles()
    return(
        <div className={classes.headerHeight}>
            <AppBar 
                position='static'
                color="transparent" 
                className={classes.header}
                elevation={0}
            >
                <Toolbar>
                    <Typography variant="h2" className={classes.randimeText}>
                        Randime!
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header