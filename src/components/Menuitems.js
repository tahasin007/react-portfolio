import React from 'react'
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
                    {item.icon1}
                  </a>
                  <a herf={item.link2} target='_blank' rel='noreferrer'>
                    {item.icon2}
                  </a>
                </li>
              </ul>
            </div>
            <h5>{item.title}</h5>
            <p>Placeholder paragraph</p>
          </div>
        )
      })}
    </div>
  )
}

export default Menuitems
