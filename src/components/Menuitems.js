import React from 'react'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

/* eslint-disable jsx-a11y/anchor-is-valid */
const Menuitems = ({ menuItems }) => {
  return (
    <div className='portfolios'>
      {menuItems.map((item) => {
        return (
          <div className='portfolio' key={item.id}>
            <div className='image-data'>
              <img src={item.image} alt='' />
              <ul className='hover-items'>
                <li>
                  <a href={item.link1} target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={faGithub}/>
                  </a>
                  {item.link2 ? (
                    <a href={item.link2} target='_blank' rel='noreferrer'>
                      <FontAwesomeIcon icon={faLink} />
                    </a>
                  ) : (
                    ''
                  )}
                </li>
              </ul>
            </div>
            <h5>{item.title}</h5>
            {/* <p>Placeholder paragraph</p> */}
          </div>
        )
      })}
    </div>
  )
}

export default Menuitems
