import {useParams} from 'react-router-dom';
import {useState} from 'react';
import Meals from '../components/meals';
function MealPage({allMeals}){
    const mealId = useParams()
    let mealIndex= mealId.mealID;
    const [meal, setMeal]=useState(allMeals.filter((meal) =>meal.id ? meal.id == mealIndex : meal.idMeal == mealIndex))
    
    return(
        <div>
            <Meals meal={meal}/>
        </div>
    )
}

export default MealPage;