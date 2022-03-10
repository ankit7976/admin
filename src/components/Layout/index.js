import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Header from '../Header'
import './home.css'

const Layout = (props) => {
  return (
    <>
         <Header />
         {props.sidebar ? 
          <Container fluid>
          <Row>
            <Col md={2} className="sidebar">
              
              <ul>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/category'}>category</NavLink></li>
                <li><NavLink to={'/product'}>Product</NavLink></li>
                <li><NavLink to={'/order'}>Order</NavLink></li>
                
              </ul>
              
              
              </Col>
            <Col md={10} style={{marginLeft:'auto'}}>{props.children}</Col>
          </Row>
        </Container> :  props.children
        }
     
    </>
  )
}

export default Layout