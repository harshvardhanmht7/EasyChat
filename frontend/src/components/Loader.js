import React from 'react'
import './Loader.css'

const Loader = () => {


  return (
    <div style={{height:"10rem" ,width:"10rem" , textAlign:'center' }}  className="spinner-border" role="status">
  <span className="sr-only"></span>
</div>
  )
}

export default Loader


