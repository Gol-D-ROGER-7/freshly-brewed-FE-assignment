import React, { useEffect, useRef, useState } from 'react'
import './LaunchPage.css'
import Rocket from '../../images/dark-mode-rocket.png'
import { useNavigate } from 'react-router-dom'

const LaunchPage = () => {
  const navigate = useNavigate();
  const [ seconds, setSeconds ] = useState(9);
  const timeId = useRef()
  const [ input, setInput ] = useState('');
  const [ mail, setMail ] = useState([]);
  useEffect(() => {
    timeId.current = setInterval(() => {
      setSeconds(prev => prev - 1)
    }, 1000)
    return () => clearInterval(timeId.current)
  }, [])

  useEffect(() => {
    if (seconds <= 0) {
      clearInterval(timeId.current)
      // alert('Jaldi Waha se Hato')
      navigate('/live');
    }

  })
  const handleSubmit = (e) => {
    e.preventDefault()
    setMail([...mail, input])
    setInput('')
    console.log(mail)
  }
  return (
    <div className='main'>
       <div className="blob1"></div>
      <div className="blob2"></div>
      <div className="logo">
        <h1>THE <span>PRODUCT</span> PLATFORM</h1>
      </div>
      <span className='title-span'><img src={Rocket} alt="rocket-img" />Launching New Module Soon! </span>
      <p className='para'>Exciting things are in the works! We're currently Crafting a new feature for you. <br /> Keep an eye out for updates – We're working to make it available soon!</p>
      <p className="responsive-para">
      We are Crafting a new features for you. Keep an eye out for updates – We're working to make it available soon!
      </p>
      <h3 className='reveal-heading'>Get Ready for the reveal!</h3>
      <div className="timer">
        <div className="min">
          <h2>00</h2>
          <h5>Minutes</h5>
        </div>
        <h5>:</h5>
        <div className="sec">
          <h2>0{seconds}</h2>
          <h5>Seconds</h5>
        </div>
      </div>
      <h6 className='hh6'>Be the first to know! Share your email and We'll notify you when it's live</h6>
      <div className="input-container">
        <form onSubmit={handleSubmit}>
          <input type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
            }}
            placeholder='Please enter your email id' />
          <button className="input-btn"
          onClick={() =>alert("Email added")}>Notify Me</button>
        </form>
      </div>
     
    </div>
  )
}

export default LaunchPage
