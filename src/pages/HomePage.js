import React from 'react'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import Meta from '../components/Meta'

const HomePage = () => {
  return (
    <>
      <Meta />
      <div className='homepage'>
        <hearder className='hero'>
          <h1 className='hero-text'>
            Hi, I am
            <span>Tahasin Mahmud</span>
          </h1>
          <p className='h-sub-text'>Full Stack Software Developer</p>
          <div className='icons'>
            <Link
              to={{ pathname: 'https://github.com/tahasin007' }}
              target='_blank'
              className='icon-holder'
            >
              <FontAwesomeIcon icon={faGithub} className='icon github' />
            </Link>
            <Link
              to={{ pathname: 'https://www.linkedin.com/in/tahasin-mahmud/' }}
              target='_blank'
              className='icon-holder'
            >
              <FontAwesomeIcon icon={faLinkedin} className='icon li' />
            </Link>
          </div>
        </hearder>
      </div>
    </>
  )
}

export default HomePage
