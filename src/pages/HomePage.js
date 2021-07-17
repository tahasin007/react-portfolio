import React from 'react'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='homepage'>
      <hearder className='hero'>
        <h1 className='hero-text'>
          Hi, I am
          <span>Tahasin Mahmud</span>
        </h1>
        <p className='h-sub-text'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
          aperiam impedit inventore velit, eveniet repellat corrupti doloribus
          quisquam distinctio? Laborum, harum. Blanditiis obcaecati alias sit!
          Voluptate soluta voluptatum fuga sit?
        </p>
        <div className='icons'>
          <Link to='' className='icon-holder'>
            <FontAwesomeIcon icon={faGithub} className='icon gh'/>
          </Link>
          <Link to='' class='icon-holder'>
            <FontAwesomeIcon icon={faLinkedin} className='icon li'/>
          </Link>
        </div>
      </hearder>
    </div>
  )
}

export default HomePage
