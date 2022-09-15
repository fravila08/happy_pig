import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function EditCartItem(){
    const cartId=(useParams().cartId)

    const [editItem, setEditItem]= useState([])    
    
    useEffect(async()=>{
        let response = await axios.get(`editItem/${cartId}`)
        const item=response.data
        setEditItem(item)
    }, [])
    
    console.log(editItem.title)
    
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
    
    const editOrder = () =>{
        axios.put(`update/${cartId}`,{
            quantity: quantity,
            special_instructions: message
        }).then(window.location.href="/#/myCart")
    }

    return(
        <div>
            <div className="editHolder">
                {editItem ? 
                    <div className="info">
                        <h5> You are ordering {editItem.quantity} of {editItem.title} <br/> with the following instructions: {editItem.special_instructions}
                        </h5>
                    </div>
                    : <p></p>}
                <div className="edit">
                    <textarea onChange={handleMessageChange}></textarea>
                    <input style={{width:"7vh"}} type="number" onChange={handleQuantity}/>
                    <button onClick={editOrder} style={{textDecoration:"underline"}}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default EditCartItem;