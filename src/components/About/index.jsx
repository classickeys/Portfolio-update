import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGithub, faHtml5, faJsSquare, faPhp, faReact } from '@fortawesome/free-brands-svg-icons';
import ContactImage from '../../assets/images/about.png'
import { SpinnerRoundFilled } from 'spinners-react';




const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={'About me'.split("")}
                            idx={15}
                        />
                    </h1>
                    <p>Hi, my name is Kelechi. I am an aspiring software engineer. Currently, I am focused on building my skills in web development
                        building and maintaining scalable applications with a focus on AI technologies such as Semantic Kernel and other forms of LLM orchaestration to create business value.</p>

                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faHtml5} color='#DD0031' />

                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faCss3} color='#F06529' />

                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faGithub} color='#28a4d9' />

                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color='#5ed4f4' />

                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faPhp} color='#efd81d' />

                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faJsSquare} color='#ec4v28' />

                        </div>


                    </div>
                </div>
            </div>

            <div className='image-container'>
                <img src={ContactImage} alt='pic'></img>
            </div>
            <SpinnerRoundFilled className='loader-active' size={250} color='#ffd700' thickness={70} />

        </>
    )
}


export default About