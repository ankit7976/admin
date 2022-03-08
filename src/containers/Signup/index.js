import React from 'react'
import { Container,Row,Col,Form,Button } from 'react-bootstrap'
import Input from '../../components/UI/Input'


const Signup = () => {
  return (
    <Container>
    <Row style={{marginTop:'50px'}}>
        <Col md={{span:6,offset:3}}>
        <Form>
        <Row>
            <Col md={6}>
            <Input 
            label="Firstname"
            type="text"
            placeholder="Enter your email.."
            value=""
            onChange={()=>{}}
            errorMsg=""
            />
            </Col>

            <Col md={6}>
            <Input 
            label="Lastname"
            type="text"
            placeholder="Enter your email.."
            value=""
            onChange={()=>{}}
            errorMsg=""
            />
            </Col>
        </Row>
 
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

export default Signup