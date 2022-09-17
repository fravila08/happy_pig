import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios'
import SignUp from './pages/signUp';
import SignIn from './pages/signIn';
import HomePage from './pages/HomePage';
import MealPage from './pages/MealPage';
import MealTypePage from './pages/MealTypePage';
import CartPage from "./pages/CartPage"
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import AppNav from './components/AppNav';
import MyProfile from './pages/MyProfile';
import EditPage from './pages/EditPage';
import piggy from './assets/piggy.png'


function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}
const csrftoken = getCookie('csrftoken');
axios.defaults.headers.common['X-CSRFToken']= csrftoken






function App() {
  const [user, setUser] = useState(null)
  const [keyOne, setKeyone]= useState()
  const [keyTwo, setKeyTwo]=useState()
  const [show, setShow]=useState(false)
    
    const mykeys=async()=>{
        const keys= await axios.get("getKeys")
        setKeyone(keys.data["canadianrapidkey"])
        setKeyTwo(keys.data["pizzarapidkey"])
        
        setShow(true)
    }
    
  function signOut(){
    event.preventDefault()
    axios.post('/sign_out').then((respone)=>{
      window.location.href=""
    })
  }

  async function curr_user(){
    const response = await axios.get('curr_user')
    const user = response.data && response.data[0] && response.data[0].fields
    setUser(user)
  }

  useEffect(()=>{
    mykeys()
    curr_user()
  },[])
  
  const [allMeals, setAllMeals]=useState([])
  const getMealById=(meal_id)=>{
    return meal[meal_id]
  }

  

  return (
    <div className="App">
      <div style={{display:"flex", justifyContent:"space-between", padding:"1vh 4vw"}}>
        <div>
          <h1><strong>THE HAPPY PIG</strong></h1>
          {user && <p>Welcome, {user.name}</p>}
        </div>
        <img style={{height:"11vh"}} src={piggy} />
      </div>
      <AppNav allMeals={allMeals} user={user}/>
      <Router>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path='/editCart/:cartId' element={<EditPage />} />
          <Route path="/mealtypes/:mealtype" element={<MealTypePage keyOne={keyOne} keyTwo={keyTwo} show={show} allMeals={allMeals} setMeals={setAllMeals}/>} />
          <Route path="/meal/:mealID" element={<MealPage allMeals={allMeals}/>} />
          <Route path='/myCart' element={<CartPage />} />
          <Route path='/myProfile' element={<MyProfile />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
