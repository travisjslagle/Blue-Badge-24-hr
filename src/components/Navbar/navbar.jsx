import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/appBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    // flexGrow means the div will grow at the same proportion as the window size!!
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    color: {
        backgroundColor: '#383838',
        color: '#f9d606'
    }
})

const Navbar = () => {
    // classes is the naming convention we should use
    const classes = useStyles();

    return(
        <div className= {classes.root}>
            <AppBar position='static'>
            <Toolbar className= {classes.color}>
                <Typography variant= 'h4' className= {classes.title} id='navTitle'>Trayvar</Typography>
            </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;