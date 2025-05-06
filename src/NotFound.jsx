import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {

        let navigate=useNavigate();

        useEffect(()=>{
            setTimeout(()=>{
            navigate('/home')
            },5000)
            
        })
  return (
    <>
      
      <img src='NotFound.png' style={{width:'600px', height:'400px',marginLeft:'400px'}} />
    </>
  )
}

export default NotFound;
