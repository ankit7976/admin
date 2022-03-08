import React from 'react'
import { Container,Row,Col,Form,Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { login } from '../../actions/auth.action'
import Input from '../../components/UI/Input'

const Signin = (props) => {

    const dispatch = useDispatch()

    const loginUser = (e)=>{
        e.preventDefault();
        const user = {
            email: 'ankit@swindia.com',
            password: 'admin'
        }
        
        dispatch(login(user))
    }
  return (

    <Container>
    <Row style={{marginTop:'50px'}}>
        <Col md={{span:6,offset:3}}>
        <Form onSubmit={loginUser}>
  
            <Input 
            label="Email"
            type="email"
            placeholder="Enter your email.."
            value=""
            onChange={()=>{}}
            errorMsg=""
            />
  
            <Input 
            label="Password"
            type="password"
            placeholder="Enter your email.."
            value=""
            onChange={()=>{}}
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