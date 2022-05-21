import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import {Link} from 'react-router-dom'

const ContactMessageScreen = () => {

   

useEffect(()=>{

},[])


  return (
    <div>
      <LinkContainer to="/">
        <Button>Home</Button>
        </LinkContainer>
        <br/>
      all contact messagews
        
        

    </div>
  )
}

export default ContactMessageScreen
