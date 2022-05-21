import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {useState,useEffect} from 'react'
import {Button,Form,Col,Row,Container} from 'react-bootstrap'
import Loader from '../components/Loader'
import { registerUser } from '../actions/userAction'
const RegisterScreen = () => {

    const dispatch=useDispatch()
    const userRegister=useSelector(state=>state.userRegister)
    const {error,registerInfo,loading}=userRegister

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const login = useSelector((state) => state.login);
  const { userInfo } = login;
  const navigate=useNavigate()

    
  useEffect(()=>{
   
    if(userInfo){
     navigate('/')
    }
 
  },[userInfo,navigate])

  const registerHandler=(e)=>{
        e.preventDefault()
        dispatch(registerUser(name,email,password,confirmPassword))
          
 }


 const loginHandler=()=>{
   navigate('/login')
 }








  return (
    <Container style={{ marginTop: "2rem" }}>
      <Row className="justify-content-md-center ">
        {error&&<h5 style={{textAlign:'center' , marginBottom:'2rem' ,color:'red' , fontStyle: 'italic'}}>{error}</h5>}
        <Col sm={12} lg={3} md={2} xl={4}>
          <Form  onSubmit={registerHandler}>
           
          <Form.Group className="mb-3" controlId="name">
              <Form.Label style={{fontWeight:'bold'}}>Name </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              
            </Form.Group>


            <Form.Group className="mb-3" controlId="email">
              <Form.Label style={{fontWeight:'bold'}}>Email Address </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              
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

            <Form.Group className="mb-3" controlId="confirmPassword">
              <Form.Label style={{fontWeight:'bold'}}>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="ConfirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
          <br/><br/>
          <Form.Text>Already have an account ? 
          <span>&nbsp;&nbsp;&nbsp;</span>
          <Button variant="primary" type="button" onClick={loginHandler}>
              Login
            </Button>
          </Form.Text>
        </Col>
      </Row>
    </Container>
  )
}

export default RegisterScreen
