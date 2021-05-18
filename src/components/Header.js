import {Link} from "react-router-dom";
//Material-UI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    logo: {
        textDecoration: 'none',
        color: '#fff',
    }
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Link className={classes.logo} to='/'>
                    <Typography variant="h6" color="inherit">
                        React Shop
                    </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}