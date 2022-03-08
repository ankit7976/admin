import React, { useState } from 'react'
import { Container,Row,Col,Form,Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { login } from '../../actions/auth.action'
import Input from '../../components/UI/Input'

const Signin = (props) => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

    const dispatch = useDispatch()

    const loginHandler = (e)=>{
        e.preventDefault();
        const user = { email, password }
        
        dispatch(login(user))
    }
  return (

    <Container>
    <Row style={{marginTop:'50px'}}>
        <Col md={{span:6,offset:3}}>
        <Form onSubmit={loginHandler}>
  
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
 
 
<Button variant="primary" type="submit">
Submit
</Button>
</Form>
        </Col>
    </Row>
</Container>
  
  )
}

export default Signin