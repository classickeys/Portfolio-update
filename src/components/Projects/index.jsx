//i want to create a project page that displays all my projects in a grid format. The projects should be displayed in a card format with an image, title, description and a link to the project. The page should be responsive and should look good on all screen sizes. I also want to add a filter option to filter the projects by category. The categories are Web Development, Mobile Development, Machine Learning and Data Science. I also want to add a search option to search for projects by title or description. The page should be built using React and should use CSS for styling. I also want to use a CSS framework like Bootstrap or Tailwind CSS for styling.

import React, { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import config from '../../../configuration'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SpinnerRoundFilled } from 'spinners-react';
import OffcampImage from '../../assets/images/offcamp.png';
import PortfolioImage from '../../assets/images/portfolio.png';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const offCampUrl = config.offcampReviewUrl;
const oldUrl = config.oldPortfolioUrl;

const gridProjects = [
    {
        title: 'Rental Management',
        description: 'A tenant management application connected to a backend database.',
        image: OffcampImage,
        link: offCampUrl,
    },
    {
        title: 'Portfolio Frontend',
        description: 'My personal portfolio website built with JavaScript, HTML and CSS.',
        image: PortfolioImage,
        link: oldUrl,
    },
];

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const offCampUrl = config.offcampReviewUrl;
    const oldUrl = config.oldPortfolioUrl;


    const [centered1, setCentered1] = useState(false);
    const [centered2, setCentered2] = useState(false);

    const handleMouseEnter1 = () => {
        setCentered1(true);
        setTimeout(() => setCentered1(false), 2000);
    };

    const handleMouseEnter2 = () => {
        setCentered2(true);
        setTimeout(() => setCentered2(false), 2000);
    };

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 5000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [])

    return (
        <>
            <div className='container project-page'>

                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={'My Projects'.split("")}
                            idx={15}
                        />
                    </h1>
                    <p>Here are some of the projects I have worked on. I have used various technologies to build these projects. I am always looking to learn new technologies and improve my skills.
                        <br />
                        I have built a few dynamic web apps with HTML, CSS, and JavaScript, leveraging this knowledge to build this React project.
                        I believe I can utilise my skills to achieve my aspirations.<br />
                        I'm open to collaborating on any interesting projects that use functional programming methodologies.
                    </p>
                </div>
                
                <div className='project-card card-1'>

                    <div className='project-info'>

                        <h2>
                            <AnimatedLetters letterClass={letterClass}
                                strArray={'Rental Management'.split("")}
                                idx={1} />
                        </h2>
                        <div className='project-image'>
                            <a href={offCampUrl}>
                                <img src={OffcampImage} className={centered1 ? 'centered' : ''} onMouseEnter={handleMouseEnter1} alt='Rental project' />
                            </a>
                        </div>
                        {/* <div className={centered1 ? 'inactive' : ''}>
                            <p> This is the capstone project from my associate degree program. A tenant management application connected to a backend database.</p>
                            <a href={offCampUrl} className='project-link'>View Project</a>
                        </div> */}
                    </div>
                </div>

                <div className='project-card card-2'>

                    <div className='project-info'>
                        <h2>
                            <AnimatedLetters letterClass={letterClass}
                                strArray={'Portfolio Frontend'.split("")}
                                idx={1} />
                        </h2>
                        <div className='project-image'>
                            <img src={PortfolioImage} className={centered2 ? 'centered' : ''} onMouseEnter={handleMouseEnter2} alt='Portfolio Project' />
                        </div>
                        {/* <div className={centered2 ? 'inactive' : ''}>
                            <p> This is my personal portfolio website built with JavaScript, HTML and CSS.</p>
                            <a href={oldUrl} className='project-link'>View Project</a>
                        </div> */}
                    </div>
                </div>

                <SpinnerRoundFilled className='loader-active' size={250} color='#ffd700' thickness={70} />


                {/* <img src={} className='image' alt='developer' /> */}
            </div>
        </>
    )
}


export default Projects;


