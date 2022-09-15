import MealTease from "./MealTease"
import { useState } from "react";

function MealList({meals}){
  // <MealTease id={id} title={nombre} price={meals.price} pic={meals.linkImagen} />
    return(
        <div>
        {meals.idMeal ? 
        <MealTease id={meals.idMeal} title={meals.strMeal} pic={meals.strMealThumb} price={meals.price}/> : 
        <MealTease title={meals.nombre} id={meals.id} price={meals.price} pic={meals.linkImagen} />
        }
        </div>
    )
}

export default MealList;