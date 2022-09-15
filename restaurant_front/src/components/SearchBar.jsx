import {Form } from 'react-bootstrap';
import {useEffect, useState} from 'react';
import MealTease from './MealTease';

function SearchBar({allMeals}){
    const [searchTitle, setSearchTitle]= useState('')
    const [results, setResults]=useState([])
    const [showSearch, setShowSearch]= useState(false)
    
    const handleChange =(event)=>{
        console.log(event.target.value)
        let value=event.target.value
        setSearchTitle(value)
    }
    useEffect(()=>{
        if (searchTitle!= ''){
            const filterSearch=allMeals.filter((meal)=>meal.strMeal ? meal.strMeal.includes(searchTitle): meal.nombre.includes(searchTitle) )
            setResults(filterSearch)
            setShowSearch(true)
        }
        else{
            setShowSearch(false)
        }
    }, [searchTitle])
    console.log(results)
    return(
        <div>
            <Form>
                <Form.Control
                type='search'
                placeholder="search"
                aria-label="search"
                onChange={(event)=>handleChange(event)}
                />
            </Form>
            {showSearch ? results.map((meals)=>(
                <MealTease id= {meals.id ? meals.id : meals.idMeal} title={meals.strMeal ? meals.strMeal : meals.nombre} pic={meals.linkImagen ? meals.linkImagen : meals.strMealThumb}/>
            )): ''}
        </div>
    )
}

export default SearchBar;