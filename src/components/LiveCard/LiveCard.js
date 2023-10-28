import React from 'react'
import Confetti from '../../images/e5ea7a96e826e3a258e6eafb23ad03b8.gif'
import './LiveCard.css'
import { Link } from 'react-router-dom'

const LiveCard = () => {
  
  return (
    <>
    <div className="blob1"></div>
    <div className="blob2"></div>
    <div className="logo">
        <h1>THE <span>PRODUCT</span> PLATFORM</h1>
      </div>
    <div className='main'>
      <img className='confetti' src={Confetti} alt="confetti" />
        <div className="live-card">
            <h1>We are Live Now!</h1>
            <h6>Our new feature is now Live and ready for you to explore. Go ahead and give it a try</h6>
            <Link to='/new-module'>
              <button className='btnn'>Get Started</button>
            </Link>
        </div>
    </div>
    </>
  )
}

export default LiveCard
