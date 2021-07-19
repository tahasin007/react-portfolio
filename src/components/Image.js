import React from 'react'
import avatar from '../images/avatar.jpg'
import { Link } from 'react-router-dom'

const Image = () => {
  return (
    <div className='image-section'>
      <div className='img'>
        <img src={avatar} alt='' />
      </div>
      <div className='about-info'>
        <h4>
          I am <span> Tahasin mahmud</span>
        </h4>
        <p className='about-skill'>
          I am a passionate Full Stack Web Developer having experience of
          building applications with JavaScript/ Nodejs/ Expressjs/ Reactjs/
          Redux and some other programming languages.
        </p>
        <div className='about-details'>
          <div className='left-sction'>
            <p>Name</p>
            <p>Date of Birth</p>
            <p>Natinonality</p>
            <p>Education</p>
          </div>
          <div className='right-section'>
            <p>: Tahasin Mahmud</p>
            <p>: 24 April, 1999</p>
            <p>: Bangladeshi</p>
            <p>: BSc in CSE</p>
          </div>
        </div>
        <div className='btn-cv'>
          <Link
            to={{
              pathname:
                'https://drive.google.com/file/d/1SY4cTFsr5C7HDsRtaXDBB7SfnzaRBBfO/view?usp=sharing',
            }}
            target='_blank'
          >
            <button className='btn'>Download CV</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Image
