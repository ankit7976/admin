import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import Layout from '../../components/Layout'
import './home.css'

const Home = () => {
  return (
   
    <Layout>
    <Container fluid>
      <Row>
        <Col md={2} className="sidebar">sidebar</Col>
        <Col md={10} style={{marginLeft:'auto'}}>container</Col>
      </Row>
    </Container>
    
    </Layout>
  )
}

export default Home