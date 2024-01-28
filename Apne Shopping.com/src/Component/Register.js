import {useNavigate, Link } from 'react-router-dom';
import './Register.css';
import axios from 'axios';
import React, { useState } from 'react'



function Register(){

  const history=useNavigate();

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  async function submit(e){
      e.preventDefault();
      if (!email.trim() || !password.trim()) {
        setErrorMessage('Please fill in all fields');
        return;
      }
      if (password !== confirmPassword) {
        setErrorMessage('Password and Confirm Password must match');
        return;
        
      }

     
      try{

          await axios.post("http://localhost:3000/Register",{
              email,password
          })
          .then(res=>{
              if(res.data==="exist"){
                  alert("User already exists")
              }
              else if(res.data==="notexist"){
                  history("/NavBar",{state:{id:email}})
              }
          })
          .catch(e=>{
              alert("wrong details")
              console.log(e);
          })

      }
      catch(e){
          console.log(e);

      }
      setErrorMessage('');

  };


    return(

        <>
            <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
        </div>
        <form>
            <h3>Register Here</h3>
            <label htmlFor="username">Email</label>
        <input className='Login-input'
          type="text"
          placeholder="Email"
          id="username"
          name="username"
          // value={formData.username}
          // onChange={handleInputChange}
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

        <label htmlFor="Cpassword">Confirm Password</label>
        <input className='Login-input'
          type="password"
          placeholder="Confirm Password"
          id="Cpassword"
          name="confirmPassword"
          onChange={(e) => setConfirmPassword(e.target.value)}
          // value={formData.confirmPassword}
         
        />


            <div className="Forgetten"><Link to="">Forgetten password ?</Link></div>
        
            <div id="errorMessage" className="error-message">
            {errorMessage}
            </div>
            

    
            <button style={{
        marginTop: '50px',
        width: '100%',
        backgroundColor: '#ffffff',
        color: '#080710',
        padding: '15px 0',
        fontSize: '18px',
        fontWeight: '600',
        borderRadius: '5px',
        cursor: 'pointer'}} onClick={submit}>Register</button>


            <p>Do have a <Link className="new_User" to="/Login"> Account ?</Link></p>

            <div className="social">
             <div className="go"><i className="fab fa-google"></i> <Link to="/">Google</Link> </div>
              <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
            </div>
        </form>
       
        </>
    )
}

export default Register;