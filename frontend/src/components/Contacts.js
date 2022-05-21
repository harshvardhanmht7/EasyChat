import React from 'react'
import CardView from './CardView'

const Contacts = ({name,email}) => {
  return (
      <div >
   <CardView  name={name} email={email} />
      
      </div>
    
  )
}

export default Contacts
