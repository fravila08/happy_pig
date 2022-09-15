import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Cart(){
    const [cart, setCart]= useState([])
    const [showData, setShowData]= useState(false)

    const getCart = async()=>{
        try{
            const response=await axios.get("cart")
            setCart(response.data)
            setShowData(!showData)
        }
        catch{
            console.log("no data")
        }
    }

    useEffect(()=>{
        getCart()
    }, [])
    
    const deleteCartItem=(id)=>{
        axios.delete(`update/${id}`).then(window.location.reload())
    }

    return(
        <div className='cartHolder'>
            <div className='cart'>
                <div className='headers'>
                    <h5 style={{textDecoration:"underline", width:"6vw"}}>ORDER</h5>
                    <h5 style={{textDecoration:"underline", width:"6vw"}}>INSTRUCTIONS</h5>
                    <h5 style={{textDecoration:"underline", width:"1vw"}}>#</h5>
                    <h5 style={{textDecoration:"underline", width:"1vw"}}>COST</h5>
                    <p style={{width:"1vw"}}></p>
                    <p style={{width:"1vw"}}></p>
                </div>
                <div className='rowHolder'>
                    {showData ? cart.map((item, index)=>
                    <div className='theRow'>
                        <p key={index} style={{width:"6vw"}} >{item.title}</p>
                        <p style={{width:"6vw"}}>{item.special_instructions}</p>
                        <p style={{width:"1vw"}}>{item.quantity}</p>
                        <p style={{width:"1vw"}}>${item.price * item.quantity}.00</p>
                        <button style={{width:"1vw", height:"1vw"}} onClick={()=>deleteCartItem(item.id)}>DELETE</button>
                        <button style={{width:"1vw", height:"1vw"}}><Link to={`/editCart/${item.id}`}>EDIT</Link></button>
                    </div>
                    )
                    : <h1>EMPTY CART</h1>}
                </div>
            </div>
        </div>
    )
}

export default Cart;