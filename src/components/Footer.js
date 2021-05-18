import React from 'react';
import {Link} from "react-router-dom";
//Material-UI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '3rem',
    },
    repo: {
        textDecoration: 'none',
        color: '#fff',
        textTransform: 'uppercase',
        display: 'block'
    },
    logo: {
        textDecoration: 'none',
        color: '#fff',
        display: 'block'
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position={'static'}>
                <Toolbar className={classes.toolbar}>
                    <Link className={classes.logo} to='/'>
                    <Typography variant="h6" className={classes.title}>
                        React Shop
                    </Typography>
                        </Link>
                    <a className={classes.repo} href="https://github.com/Mad-Imp/spa-react-food" target="_blank" rel="noreferrer" color="inherit" >Репозиторий</a>
                </Toolbar>
            </AppBar>
        </div>
    );
}