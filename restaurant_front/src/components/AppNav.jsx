import {useEffect, useState} from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';

function AppNav({allMeals, user}){
    function signOut(){
        event.preventDefault()
        axios.post('/sign_out').then((respone)=>{
          window.location.href="/"
        })
      }
    
    const navItems = ['Meals', 'Dessert']
    const[navbarItems, setNavbarItems]= useState(navItems)

    

    

    return(
        <div className='navbar'>
            <Navbar className='myNav' >
                <Nav className='myNav' >
                    <Nav.Link className='mylinks' href="/" >Home</Nav.Link>
                    {
                        navbarItems.map((item, index)=>{
                            return(
                                <Nav.Link className='mylinks' id={index} href={`/#/mealtypes/${item}`} >
                                    {item}
                                </Nav.Link>
                            )
                        })
                    }
                    <Nav.Link className='mylinks' href="/#/myCart" >My Cart</Nav.Link>
                    {/* <Nav.Link href='/#/myProfile'>My Profile</Nav.Link> */}
                    {user ? <button className='mylinks' onClick={signOut}>Sign Out</button>:
                    <div className='otherLinks' >
                        <Nav.Link className='mylinks' href="/#/signup">Sign Up</Nav.Link>
                        <Nav.Link className='mylinks' id="needsMargin" href="/#/signin">Sign In</Nav.Link>
                    </div>}
                    
                </Nav>
            </Navbar>
            
            
        </div>
    )

}
export default AppNav;