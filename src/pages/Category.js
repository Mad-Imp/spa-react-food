//Hooks
import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
//Others
import Preloader from "../components/Preloader";
import MealList from "../components/MealList";
import {getFilteredCategory} from "../api";

export default function Category() {
    const {name} = useParams();
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        getFilteredCategory(name).then(data => setMeals(data.meals))
    }, [name]);

    return (
        <>
            {!meals.length ? <Preloader/> : <MealList meals={meals}/>}
        </>
    )
}