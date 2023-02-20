import React from 'react'
import { useNavigate } from 'react-router-dom'; 

function Home() {

  const navigate = useNavigate();

  return (
    <div className="heading-container">
      <h1 
        onClick={()=>{navigate('/about-me')}} 
        className="inter-font-bold home-heading1 slideInLeft">ABOUT ME!
      </h1>
      <h1
        onClick={()=>{navigate('/projects')}} 
        className="inter-font-light home-heading2 slideInRight">MY PROJECTS
      </h1>
    </div>
  )
}

export default Home
