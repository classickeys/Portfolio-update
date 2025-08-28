import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s1.png'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters/index.jsx'
import { useEffect, useState } from 'react'
import Logo from './Logo/index.jsx'
import { SpinnerRoundFilled } from 'spinners-react';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = 'elechi'.split("")
  const jobArray = 'Just A Chill Guy'.split("")

  useEffect(() => {
    let timeoutId = setTimeout(() =>{
      setLetterClass('text-animate-hover')
    }, 4000)

    return ()=> {
      clearTimeout(timeoutId)
    }
  },[])

  return (
    <div className="container home-page">
      <div className="home-flex">
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
          <h2> Aspiring Software Engineer | MSc Masters Candidate</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <div className="logo-zone">
          <Logo />
        </div>
      </div>
      <SpinnerRoundFilled className='loader-active' size={250} color='#ffd700' thickness={70} />
    </div>
  )
}

export default Home
