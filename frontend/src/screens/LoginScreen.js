import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import {useNavigate} from 'react-router-dom'
import { loginUser } from "../actions/userAction";
import Loader from "../components/Loader";

const LoginScreen = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const { userInfo, error, loading } = login;
  const navigate=useNavigate()

  

  useEffect(()=>{
   
    if(userInfo){
     navigate('/')
    }
 
  },[userInfo,password,email])

  const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(loginUser(email,password))
          
 }


 const RegisterHandler=()=>{
   navigate('/adduser')
 }



  return (
    
    <Container style={{ marginTop: "2rem" }}>
      <Row className="justify-content-md-center ">
        {error&&<h5 style={{textAlign:'center' , marginBottom:'2rem' ,color:'red' , fontStyle: 'italic'}}>{error}</h5>}
        <Col sm={12} lg={3} md={2} xl={4}>
          <Form  onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label style={{fontWeight:'bold'}}>Email Address </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label style={{fontWeight:'bold'}}>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <br/><br/><br/><br/>
          <Form.Text>Don't have an account ? 
          <span>&nbsp;&nbsp;&nbsp;</span>
          <Button variant="primary" type="button" onClick={RegisterHandler}>
              Register
            </Button>
          </Form.Text>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginScreen;
