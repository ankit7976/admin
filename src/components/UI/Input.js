import React from 'react'
import { Container,Row,Col,Form,Button } from 'react-bootstrap'
const Input = (props) => {
  return (
    <div>

<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>{props.label}</Form.Label>
<Form.Control
  type={props.type}
  placeholder={props.placeholder}
  value={props.value}
  onChange={props.onChange}
/>
<Form.Text className="text-muted">
  {props.errorMsg}
</Form.Text>
</Form.Group>
    </div>
  )
}

export default Input