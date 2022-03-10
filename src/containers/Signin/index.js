import React, { useEffect, useState } from 'react'
import { Container,Row,Col,Form,Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {Navigate} from 'react-router-dom'
import { isUserLoggedIn, login } from '../../actions/auth.action'
import Input from '../../components/UI/Input'

const Signin = (props) => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState(''); 
    
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()




    const loginHandler = (e)=>{
        e.preventDefault();
        const user = { email, password }
        
        dispatch(login(user))
    }

    if(auth.authenticate){
      return <Navigate to={'/'} />
    }
  return (

    <Container>


<div class="container d-flex align-items-center justify-content-center form-height-login pt-24px pb-24px">
        <div class="row justify-content-center">
            <div class="col-lg-6 col-md-10">
                <div class="card">
                    <div class="card-header bg-primary">
                        <div class="ec-brand"><a href="index.html" title="Ekka"><img class="ec-brand-icon"
                                    src="assets/img/logo/logo-login.png" alt="" /></a></div>
                    </div>
                    <div class="card-body p-5">
                        <h4 class="text-dark mb-5">Sign In</h4>
                        <form onSubmit={loginHandler}>
                            <div class="row">
                            <Input 
            label="Email"
            type="email"
            placeholder="Enter your email.."
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            errorMsg=""
            />
  
            <Input 
            label="Password"
            type="password"
            placeholder="Enter your email.."
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            errorMsg=""
            />
                                
                                <div class="col-md-12">
                                    <div class="d-flex my-2 justify-content-between">
                                        <div class="d-inline-block mr-3">
                                            <div class="control control-checkbox">Remember me <input type="checkbox" />
                                                <div class="control-indicator"></div>
                                            </div>
                                        </div>
                                        <p><a class="text-blue" href="#">Forgot Password?</a></p>
                                    </div><button type="submit" class="btn btn-primary btn-block mb-4">Sign In</button>
                                    <p class="sign-upp">Don't have an account yet ? <a class="text-blue"
                                            href="sign-up.html">Sign Up</a></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
</Container>
  
  )
}

export default Signin