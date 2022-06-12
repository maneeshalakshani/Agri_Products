import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios'

function Register() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  })

  const onChangeInput = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value })
  }

  const registerSubmit = async e => {
    e.preventDefault()
    try {
      await axios.post('/user/register', { ...user })

      localStorage.setItem('firstLogin', true)

      window.location.href = "/product";

    } catch (err) {
      alert(err.response.data.msg)
    }
  }
  return (
    <div>
      <div className="container shadow my-5">
        <div className="row justify-content-end">
          <div className="col-md-5 d-flex flex-column align-items-center text-dark justify-content-center form order-2">
            <h1 className="display-4 fw-bolder text-center"> Welcome to the Store </h1>
            <p className="lead text-center"> Enter Your Details to Register </p>
            <h5 className="mb-4">OR</h5>
            <NavLink to="/login" className="btn btn-outline-light rounded-pill pb-2 w-50">Login</NavLink>
          </div>
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bolder mb-5">REGISTER</h1>
            <form onSubmit={registerSubmit}>

              <div class="mb-3">
                <label for="username" class="form-label">Your Name</label>
                <input type="text" name="name" class="form-control" required
                  placeholder="Name" value={user.name} onChange={onChangeInput} />
              </div>

              <div class="mb-3">
                <label for="username" class="form-label">Your E-mail Address</label>
                <input type="email" name="email" class="form-control" required
                  placeholder="Email" value={user.email} onChange={onChangeInput} />
              </div>

              <div class="mb-3">
                <label for="username" class="form-label">Password</label>
                <input type="password" name="password" class="form-control" required autoComplete="on"
                  placeholder="Password" value={user.password} onChange={onChangeInput} />
              </div>

              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">I Agree Terms and Conditions</label>
              </div>
              <button type="submit" class="btn btn-success w-100 mt-4 rounded-pill">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;