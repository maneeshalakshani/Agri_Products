import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios'

function Login() {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const onChangeInput = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value })
  }

  const loginSubmit = async e => {
    e.preventDefault()
    try {
      await axios.post('/user/login', { ...user })

      localStorage.setItem('firstLogin', true)

      window.location.href = "/product";

    } catch (err) {
        alert(err.response.data.msg)
    }
  }

  return (
    <div>
      <div className="container shadow my-5">
        <div className="row">
          <div className="col-md-5 d-flex flex-column align-items-center text-dark justify-content-center form">
            <h1 className="display-4 fw-bolder"> Welcome Back</h1>
            <p className="lead text-center">Enter Your Credentials to Login</p>
            <h5 className="mb-4">OR</h5>
            <NavLink to="/register" className="btn btn-outline-light rounded-pill pb-2 w-50">Register</NavLink>
          </div>
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bolder mb-5">LOGIN</h1>
            <form onSubmit={loginSubmit}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input name="email" value={user.email} onChange={onChangeInput} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input name="password" value={user.password} onChange={onChangeInput} autoComplete="on" type="password" class="form-control" id="exampleInputPassword1" required />
              </div>
              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Remember Me</label>
              </div>
              <button type="submit" class="btn btn-success w-100 rounded-pill">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login