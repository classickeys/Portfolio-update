import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s1.png'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = 'elechi'.split("")
  const jobArray = 'Just A Chill Guy'.split("")

  useEffect(() => {
    let timeoutId = setTimeout(() =>{
      setLetterClass('text-animate-hover')
    },4000)

    return ()=> {
      clearTimeout(timeoutId)
    }
  },[])

    

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={21}
          />
        </h1>
        <h2>Junior Developer | BSc Honours Graduand</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo />
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default Home
