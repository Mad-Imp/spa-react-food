import {Link} from "react-router-dom";
//Material-UI
import Card from '@material-ui/core/Card';
import {makeStyles} from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Button} from "@material-ui/core";


const useStyles = makeStyles({
    root: {
        maxWidth: 270,
        margin: '20px 8px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    media: {
        height: 270,
        width: 270,
        margin: '0 auto 1.2rem'
    },
    title: {
        fontSize: '1.2rem',
        textAlign: 'center'
    },
    btn: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    link: {
        textDecoration: 'none',
        color: '#323232',
    }
});

export default function Meal({strMeal, idMeal, strMealThumb}) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <Link to={`/meal/${idMeal}`} className={classes.link}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={strMealThumb} alt={strMeal.toLowerCase()}
                />
                <CardContent>
                    <Typography className={classes.title}
                                gutterBottom
                                variant="h5"
                                component="h2">
                        {strMeal}
                    </Typography>
                </CardContent>
            </CardActionArea>
            </Link>
            <CardActions>
                <Link to={`/meal/${idMeal}`} className={classes.link}>
                    <Button className={classes.btn} size="small" color="primary">Watch recipe</Button>
                </Link>
                <Typography gutterBottom
                            variant="h6"
                            component="h3">
                </Typography>
            </CardActions>
        </Card>
    );
}