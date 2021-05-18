//Hooks
import {useState, useEffect} from "react";
import {useParams, useHistory} from 'react-router-dom';
//Material-UI
import {makeStyles} from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
//Others
import Preloader from "../components/Preloader";
import {getMealById} from "../api";

const useStyles = makeStyles((theme) => ({
    icon: {
        margin: '2rem 0 0 2rem',
    },
    description: {
        fontWeight: 350,
    },
    table: {
        maxWidth: 700,
    },

}));

export default function Recipe() {
    const classes = useStyles();
    const {id} = useParams();
    const [recipe, setRecipe] = useState({});
    const {goBack} = useHistory();

    useEffect(() => {
        getMealById(id).then(data => setRecipe(data.meals[0]));
    }, [id]);

    return (
        <>
            <IconButton className={classes.icon} aria-label="go back" onClick={goBack}>
                <ArrowBackIcon fontSize="large"/>
            </IconButton>
            {!recipe.idMeal ? <Preloader/> : (
                <div className='wrap'>
                    <div className='recipe'>
                        <img className='img' src={recipe.strMealThumb} alt={recipe.strMeal}/>
                        <div>
                            <h1 className='title'>{recipe.strMeal}</h1>
                            <h6>Category: {recipe.strCategory}</h6>
                            {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
                            <p className={classes.description}>{recipe.strInstructions}</p>
                        </div>
                    </div>

                    <TableContainer className='table' align="center" component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Ingredients</TableCell>
                                    <TableCell align="center">Measure</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    Object.keys(recipe).map(key => {
                                        if (key.includes('Ingredient') && recipe[key]) {
                                            return (
                                                <TableRow key={key}>
                                                    <TableCell align="center" component="th" scope="row">
                                                        {recipe[key]}
                                                    </TableCell>
                                                    <TableCell align="center">{recipe[`strMeasure${key.slice(13)}`]}</TableCell>
                                                </TableRow>
                                            )
                                        }
                                        return null
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    {recipe.strYoutube ? (
                        <div className='row'>
                            <h5 className='video-title'>Video Recipe</h5>
                            <iframe title={id} src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}
                                    allowFullScreen/>
                        </div>
                    ) : null}
                </div>

            )}
            <IconButton className={classes.icon} aria-label="go back" onClick={goBack}>
                <ArrowBackIcon fontSize="large"/>
            </IconButton>
        </>
    )
}