import axios from 'axios';
import {useState} from 'react'

function Meals({meal}){
    const add_to_cart=(mealToCart)=>{
        axios.put("add_to_cart", {
            title : mealToCart.nombre,
            price: 5,
            quantity: quantity,
            special_instructions: message 
        }).then(window.location.href="/#/myCart")
    }

    const [message, setMessage] = useState('');

    const handleMessageChange = event => {
        setMessage(event.target.value);
        console.log(event.target.value);
    };

    const [quantity, setQuantity] = useState('')

    const handleQuantity = event =>{
        setQuantity(event.target.value)
        console.log(event.target.value)
    }

    const add_to_cart_meals=(mealCart)=>{
        axios.put("add_to_cart",{
            title: mealCart.strMeal,
            price: 5.00,
            quantity: quantity,
            special_instructions: message
        }).then(window.location.href="/#/myCart")
    }

    return (
        <div className='indivItem'>
            {meal[0].id ?
            <div className='foodCard'>
                <img src={meal[0].linkImagen}  style={{width:"30vw", border:"black 1vw solid", borderRadius:"2vw"}}/>
                <p>{meal[0].nombre}</p>
                {meal[0].descripcion ? <p>{meal[0].descripcion}</p> : <p>no description available</p>}
                <p>$5.00</p>
                <br/>
                <input style={{width:"7vh"}} type="number" onChange={handleQuantity} />
                <br/> 
                <br/>
                <textarea className='special_instructions' onChange={handleMessageChange} placeholder="Special Instructions"></textarea>
                <br/>
                <button style={{textDecoration:"underline"}} onClick={()=>add_to_cart(meal[0])}>Add to Cart</button>
            </div>
            : 
            <div className='foodCard'>
                <img src={meal[0].strMealThumb} style={{width:"30vw", border:"black 1vw solid", borderRadius:"2vw"}}/>
                <p>{meal[0].strMeal}</p>
                {meal[0].descripcion ? <p>{meal[0].descripcion}</p> : <p>no description available but I can promise it's really good</p>}
                <p>$5.00</p>
                <br/>
                <input style={{width:"7vh"}} type="number" value="1" onChange={handleQuantity} />
                <br/>
                <br/>
                <textarea style={{width:"35vw", height:"30vh", borderRadius:"2vw", padding:"5px"}} className='special_instructions' onChange={handleMessageChange} placeholder="Special Instructions"></textarea>
                <br/>
                <button style={{textDecoration:"underline"}} onClick={()=>add_to_cart_meals(meal[0])}>Add to Cart</button>
            </div>}
        </div>
    )
}
export default Meals;