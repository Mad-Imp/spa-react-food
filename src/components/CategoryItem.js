import {makeStyles} from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Button} from "@material-ui/core";


const useStyles = makeStyles({
    root: {
        maxWidth: 350,
        margin: '20px 8px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    media: {
        height: 260,
        width: 260,
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
        color: '#292929'
    }
});

export default function GoodItem({strCategory, strCategoryThumb, strCategoryDescription}) {
    const classes = useStyles();


    return (
        <Card className={classes.root}>
            <Link to={`/category/${strCategory}`} className={classes.link}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={strCategoryThumb} alt={strCategory.toLowerCase()}
                />
                <CardContent>
                    <Typography className={classes.title}
                                gutterBottom
                                variant="h5"
                                component="h2">
                        {strCategory.toUpperCase()}

                    </Typography>
                    <Typography variant="body2"
                                color="textSecondary"
                                component="p">
                        {strCategoryDescription.slice(0, 150)}...
                    </Typography>
                </CardContent>
            </CardActionArea>
            </Link>
            <CardActions>
                <Link to={`/category/${strCategory}`} className={classes.link}>
                    <Button className={classes.btn} size="small" color="primary">Watch category</Button>
                </Link>
                <Typography gutterBottom
                            variant="h6"
                            component="h3">
                </Typography>
            </CardActions>
        </Card>
    );
}