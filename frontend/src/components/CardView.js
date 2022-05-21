import React from 'react'
import {Link} from 'react-router-dom'
import {Card,Button} from 'react-bootstrap'

const CardView = ({name,email}) => {
  return (
    <div>
      <Card style={{ width: '18rem' , backgroundColor:'#F9F3EE' }}>

  <Card.Body >
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      {email}
    </Card.Text>
   <Link to={`/messages/contactmessage/${email}`}><Button variant="primary">Read Mails</Button></Link> 
  </Card.Body>
</Card>
    </div>
  )
}

export default CardView
