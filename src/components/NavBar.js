import React from 'react'
import avatar from '../images/avatar.jpg'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='NavBar'>
      <nav className='nav'>
        <div className='profile'>
          <img src={avatar} alt='' />
        </div>
        <ul className='nav-items'>
          <li className='nav-item'>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/about' exact activeClassName='active'>
              About
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/portfolios' exact activeClassName='active'>
              Portfolios
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/contact' exact activeClassName='active'>
              Contact
            </NavLink>
          </li>
        </ul>
        <footer className='footer'>
          <p>Copyright <span>@Tahasin Mahmud</span></p>
        </footer>
      </nav>
    </div>
  )
}

export default NavBar
