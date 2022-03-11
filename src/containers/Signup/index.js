import React, { useState } from 'react'
import { Container, Row, Col, Form, Button,  } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate,NavLink } from 'react-router-dom'
import { signup } from '../../actions/user.action'
import Input from '../../components/UI/Input'


const Signup = () => {

  const [firstName, setFirstname] = useState('')
  const [lastName, setlastname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [error, setError] = useState('')
  const dispatch = useDispatch('')

  const auth = useSelector(state => state.auth)
  if (auth.authenticate) {
    return <Navigate to={'/'} />
  }

 


  const handelSignup = (e) => {
    e.preventDefault()
    const user = { firstName, lastName, email, password }
    dispatch(signup(user))

  }
  return (

<div class="sign-inup">
    <div class="container d-flex align-items-center justify-content-center form-height pt-24px pb-24px">
        <div class="row justify-content-center">
            <div class="col-lg-4 col-md-10">
                <div class="card">
                    <div class="card-header bg-primary">
                        <div class="ec-brand"><a href="index.html" title="Ekka"><img class="ec-brand-icon"
                                    src="assets/img/logo/logo-login.png" alt="" /></a></div>
                    </div>
                    <div class="card-body p-5">
                        <h4 class="text-dark mb-5">Sign Up</h4>
                        <form onSubmit={handelSignup}>
                            <div class="row">
                      
             
                <Input
                  label="Firstname"
                  type="text"
                  placeholder="Enter your email.."
                  value={firstName}
                  onChange={(e) => { setFirstname(e.target.value) }}
                  errorMsg=""
                />
             

             
                <Input
                  label="Lastname"
                  type="text"
                  placeholder="Enter your email.."
                  value={lastName}
                  onChange={(e) => { setlastname(e.target.value) }}
                  errorMsg=""
                />
             

            <Input
              label="Email"
              type="email"
              placeholder="Enter your email.."
              value={email}
              onChange={(e) => { setemail(e.target.value) }}
              errorMsg=""
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter your email.."
              value={password}
              onChange={(e) => { setpassword(e.target.value) }}
              errorMsg=""
            />
                                <div class="col-md-12">
                                 
                                    <button type="submit" class="btn btn-primary btn-block mb-4">Sign Up</button>
                                    <p class="sign-upp">Already have an account? <NavLink class="text-blue"
                                            to={"/signin"}>Sign in</NavLink></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
 
</div>


    
  )
}

export default Signup