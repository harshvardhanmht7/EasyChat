import React from 'react'
import {Nav,NavDropdown,Container,Navbar} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { logoutUser } from '../actions/userAction'
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {

 const login=useSelector(state=>state.login)

 const {userInfo}=login
  
 const navigate=useNavigate()

 const dispatch=useDispatch()


 const logoutHandler=()=>{
   dispatch(logoutUser())

 }

  return (
    <Navbar style={{backgroundColor: '#C4DDFF' }} expand="lg">
  <Container >
    <Navbar.Brand className="fs-2 fw-bold fst-italic" style={{color:"##00092C"}} to="/">EasyMail</Navbar.Brand>
    
    {userInfo&&
    <Navbar.Collapse id="basic-navbar-nav  ">
      <Nav  style={{marginLeft:'70%'} } >
        <LinkContainer to="/">
        <Nav.Link className=" fw-bold"  style={{color:"#332FD0"}}>Home</Nav.Link> 
        </LinkContainer>
        
        <LinkContainer to="/login">
        <Nav.Link onClick={logoutHandler} className=" fw-bold"  style={{color:"#332FD0"}}>Logout</Nav.Link>
        </LinkContainer>
        
        <NavDropdown className=" fw-bold" title="Dropdown" id="basic-nav-dropdown" style={{color:"#332FD0"}}>
          <NavDropdown.Item className=" fw-bold" href="#action/3.1"style={{color:"#062C30"}}>Action</NavDropdown.Item>
          <NavDropdown.Item className=" fw-bold" href="#action/3.2"style={{color:"#062C30"}}>Another action</NavDropdown.Item>
          <NavDropdown.Item className=" fw-bold" href="#action/3.3" style={{color:"#062C30"}}>Something</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>}
   
  </Container>
</Navbar>
  )
}

export default Header
