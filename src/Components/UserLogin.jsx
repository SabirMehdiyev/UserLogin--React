import React from 'react'
import './UserLogin.css'

const UserLogin = () => {

  const myFunction = () => {
    let email = document.querySelector(".email").value.slice(-3);
    let password = document.querySelector(".password").value;

    let passwordRegex = /.{8,}/;

    if (email === ".ru" && passwordRegex.test(password)) {
   
      alert("Successful login")
    } 
    else {
      alert("Invalid email or password");
    }


  }

  return (
    <div className='container'>
      <h2>Sign in</h2>
      <form>
        <input type='email' className='email' placeholder='Email'/>
        <input type='password' className='password' placeholder='password' />
        <button type="submit" onClick={myFunction}>Log In</button>
      </form>
    </div>
  );
};


export default UserLogin
