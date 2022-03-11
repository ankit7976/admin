import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate,NavLink } from 'react-router-dom'
import { isUserLoggedIn, login } from '../../actions/auth.action'
import Input from '../../components/UI/Input'
 

const Signin = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()




    const loginHandler = (e) => {
        e.preventDefault();
        const user = { email, password }

        dispatch(login(user))
    }

    if (auth.authenticate) {
        return <Navigate to={'/'} />
    }
    return (

      <div className='sign-inup'>


            <div className="container d-flex align-items-center justify-content-center form-height-login pt-24px pb-24px">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-10">
                        <div className="card">
                            <div className="card-header bg-primary">
                                <div className="ec-brand"><a href="index.html" title="Ekka"><img className="ec-brand-icon"
                                    src="./assets/img/logo/logo-login.png" alt="" /></a></div>
                            </div>
                            <div className="card-body p-5">
                                <h4 className="text-dark mb-5">Sign In</h4>
                                <form onSubmit={loginHandler}>
                                    <div className="row">
                                        <Input
                                            label="Email"
                                            type="email"
                                            placeholder="Enter your email.."
                                            value={email}
                                            onChange={(e) => { setEmail(e.target.value) }}
                                            errorMsg=""
                                        />

                                        <Input
                                            label="Password"
                                            type="password"
                                            placeholder="Enter your email.."
                                            value={password}
                                            onChange={(e) => { setPassword(e.target.value) }}
                                            errorMsg=""
                                        />

                                        <div className="col-md-12">
                                            <div className="d-flex my-2 justify-content-between">
                                                <div className="d-inline-block mr-3">
                                                    <div className="control control-checkbox">Remember me <input type="checkbox" />
                                                        <div className="control-indicator"></div>
                                                    </div>
                                                </div>
                                                <p><a className="text-blue" href="#">Forgot Password?</a></p>
                                            </div><button type="submit" className="btn btn-primary btn-block mb-4">Sign In</button>
                                            <p className="sign-upp">Don't have an account yet ? <NavLink to={'/signup'}>Sign Up</NavLink></p>
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

export default Signin