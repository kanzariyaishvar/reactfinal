import React, { useState } from 'react';
import '../Pages/style.css';
import Header from '../Header';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';

const obj = {
  username: "",
  email: "",
  password: ""
};

function Sing() {

let navigate=useNavigate()
  let [state, setState] = useState(obj);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3004/users', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(state)
    })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      navigate('/Login');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <>
      <Header />

      <div id="SignHeader">
        <h1>Sign up</h1>
      </div>

      <div id='LoginMain'>
        <div className="LoginChild">
          <div className="LoginInner1">
            <img src="/Colorlib/laptop.png" alt="" />
          </div>
          <div className="LoginInner2">
            <form onSubmit={handleSubmit}>
              <h2>Welcome Back! <br /> Please Sign Up Now</h2>
              <label htmlFor="username">UserName</label>
              <input type="text" name='username' className='form-control' placeholder='Enter UserName...' onChange={handleChange} />
              <label htmlFor="email">Email</label>
              <input type="email" name='email' className='form-control' placeholder='Enter Email..' onChange={handleChange} />
              <label htmlFor="password">Password</label>
              <input type="password" name='password' className='form-control' placeholder='Enter Password..' onChange={handleChange} />
              <button type='submit' className='btn sign'>Sign Up</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Sing;