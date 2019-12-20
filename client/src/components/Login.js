import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [login, setLogin] = useState(
    {
      credentials: {
         username: '',
         password: ''
      },
      isLoading: false
    }
  )

  const changeHandler = e => {
    setLogin({
      credentials: {
        ...login.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  const submitLogin = e => {
    e.preventDefault();
    setLogin({ isLoading: true })
    axiosWithAuth()
      .post('/', login.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        props.history.push('/protected')
      })
      .catch(err => console.log('Data returned an error', err))
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={submitLogin} className="form-container">
        <label htmlFor="username">Username:
           <input 
              type="text"
              name="username"
              value={login.credentials.username} 
              onChange={changeHandler} />
        </label>
        <label htmlFor="password">Password:
           <input 
              type="text"
              name="password"
              value={login.credentials.password} 
              onChange={changeHandler} />
        </label>
      </form>
    </>
  );
};

export default Login;
