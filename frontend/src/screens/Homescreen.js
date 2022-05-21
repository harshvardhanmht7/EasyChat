import {React, useEffect, useLayoutEffect, useState} from 'react'
import { Row,Col } from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {getContactsList} from '../actions/userAction'
import Contacts from '../components/Contacts'
import Loader from '../components/Loader'

const Homescreen = () => {

  const contactsList =useSelector(state=>state.contactsList)
  const dispatch=useDispatch()
  const {contacts,loading,error} =contactsList
  const login =useSelector(state=>state.login)
  const {userInfo}=login
  const [display,setDisplay]=useState(false)

  const navigate=useNavigate()

  useEffect(()=>{


    if(!userInfo){
      navigate('/login')
    }
    else{
      dispatch(getContactsList())
      setDisplay(true)
    }
    
 
  },[dispatch,navigate,userInfo])



  return (
    
    <div style={{textAlign:'center'}}>
      
       {loading?<Loader/>: display?
       <div style={{marginTop:'2rem',marginLeft:'2rem'}}>
      {
        
        <Row>
          {contacts.map((contact) => (
            <Col key={contact._id} sm={12} md={6} lg={4} xl={3}>
              <Contacts  name={contact.name} email={contact.email} />
            </Col>
          ))}
        </Row>
      }
  </div>:<div/>}

    </div>
   
   
  )
}

export default Homescreen
