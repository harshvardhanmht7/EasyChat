import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
        <Container style={{ position: 'relative',
    bottom: '1rem',width:'100%',textAlign:'center' ,marginTop:"2rem"  }}>
            <Row>
                <Col className='text-center py-3'>
                Copyright &copy; EasyMail
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer