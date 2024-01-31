import {useNavigate, Link } from 'react-router-dom';
import './Register.css';
import React, {  useState } from "react"
import axios from "axios"



function Login() {

  const navigate=useNavigate();

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [errorMessage,setErrorMessage]=useState('')

  async function submit(e){
      e.preventDefault();

      if (!email.trim() || !password.trim()) {
        setErrorMessage('Please fill in all fields');
        return;
      }

      try {
        const response = await axios.post("http://localhost:3000/Login", {
            email,
            password
        });
    
        if (response.data.status === "exist") {
            const userName = response.data.userName;
            navigate("/Dashboard", { state: { id: userName } });
        } else if (response.data === "notexist") {
            alert("User has not signed up");
        }
    } catch (e) {
        alert("Login failed");
        console.log(e);
    }
    
  };

    return(

        <>
            <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
        </div>
        <form  onSubmit={submit} action='post'>  
            <h3>Login Here</h3>
            <label htmlFor="username">Email</label>
        <input className='Login-input'
          type="text"
          placeholder="Email"
          id="username"
          name="username"
          // value={formData.username}
          onChange={(e) => { setEmail(e.target.value) }} 
        />

        <label htmlFor="password">Password</label>
        <input className='Login-input'
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          // value={formData.password}
          onChange={(e) => { setPassword(e.target.value) }} 
        />

        


            <div className="Forgetten"><Link to="/">Forgetten password ?</Link></div>
        
            <div id="errorMessage" className="error-message">
             {errorMessage}
            </div>
            

    
            <button type='submit' style={{
        marginTop: '50px',
        width: '100%',
        backgroundColor: '#ffffff',
        color: '#080710',
        padding: '15px 0',
        fontSize: '18px',
        fontWeight: '600',
        borderRadius: '5px',
        cursor: 'pointer'}} onClick={submit}>Login</button>


            <p>Are you <Link className="new_User" to="/Register"> new_User ?</Link></p>

            <div className="social">
             <div className="go"><i className="fab fa-google"></i> <Link to="/">Google</Link> </div>
              <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
            </div>
        </form>
        </>
    )
}

export default Login;