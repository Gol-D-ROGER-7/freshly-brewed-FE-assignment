import React from 'react'
import './NewModule.css'
import img from '../../images/Ellipse 52.png'

const NewModule = () => {
  return (
    <div className='app'>
      <div className="nav">
      <div className="logoo">
        <h1>THE <span>PRODUCT</span> PLATFORM</h1>
      </div>
      <div className="profile-img">
      <img className='p-img' src={img} alt="profile-img" />
      </div>
      </div>
    </div>
  )
}

export default NewModule
