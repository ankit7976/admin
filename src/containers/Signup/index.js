import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
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
    <Container>
      <Row style={{ marginTop: '50px' }}>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handelSignup}>
            <Row>
              <Col md={6}>
                <Input
                  label="Firstname"
                  type="text"
                  placeholder="Enter your email.."
                  value={firstName}
                  onChange={(e) => { setFirstname(e.target.value) }}
                  errorMsg=""
                />
              </Col>

              <Col md={6}>
                <Input
                  label="Lastname"
                  type="text"
                  placeholder="Enter your email.."
                  value={lastName}
                  onChange={(e) => { setlastname(e.target.value) }}
                  errorMsg=""
                />
              </Col>
            </Row>

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


            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Signup