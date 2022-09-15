import axios from 'axios'

function SignIn(){
    function signIn(){
        event.preventDefault()
        let email= document.getElementById('emailSignIn').value
        let password= document.getElementById('passwordSignIn').value
        axios.post('/sign_in', {
          email: email, 
          password: password
        }).then((response)=>{
          console.log('response from server: ', response)
          window.location.href="/"
        })
    }
    return (
      <div className='signCont'>
        <form onSubmit={signIn} className='signForm'>
            <label><h3>Email:</h3></label>
            <input className='textInput' id='emailSignIn' placeholder='EMAIL'/>
            <br/>
            <label><h3>Password:</h3></label>
            <input  className='textInput' id='passwordSignIn' type='password' placeholder='PASSWORD'/>
            <br/>
            <input className='subBtn' type="submit" placeholder='Sign Up'/>
        </form>
      </div>
    )
}

export default SignIn;
