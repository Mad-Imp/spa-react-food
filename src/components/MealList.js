//Hooks
import {useHistory} from "react-router-dom";
//Material-UI
import {makeStyles} from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
//Others
import Meal from "./Meal";


const useStyles = makeStyles((theme) => ({
    icon: {
        margin: '2rem 0 0 2rem',
    },
}));

export default function MealList({meals}) {
    const classes = useStyles();
    const {goBack} = useHistory();

    return (
        <>
        <IconButton className={classes.icon} aria-label="go back" onClick={goBack}>
            <ArrowBackIcon fontSize="large"/>
        </IconButton>
        <div className="list">
            {meals.map(meal => (
                <Meal key={meal.idMeal} {...meal}/>
            ))}
        </div>
        </>
    )
}