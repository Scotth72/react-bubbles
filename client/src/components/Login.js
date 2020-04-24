import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from "../utils/axiosWithAuth";


const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const history = useHistory()
  const [login, setLogin] = useState({
    username: '',
    password: '',
    // isFetching: false
  })

  const handleChanges = e => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    // setLogin({ ...login, isFetching: true })
    axiosWithAuth()
      .post(`/api/login`, login)
      .then(res => {
        localStorage.setItem(`token`, res.data.payload)
        history.push(`/bubblesPage`)
      })
      .catch(err => console.log({ err }))
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">User Name</label>
        <input
          name="username"
          text="text"
          placeholder="Enter Username Here"
          id="username"
          onChange={handleChanges}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          text="text"
          placeholder="Enter password here"
          id="password"
          onChange={handleChanges}
        />
        <br />
        <button type="submit">Login In</button>


      </form>
    </>
  );
};

export default Login;
