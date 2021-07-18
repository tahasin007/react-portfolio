import React from 'react'
import Title from '../components/Title'
import Categories from '../components/Categories'
import Menuitems from '../components/Menuitems'
import portfolios from '../data/allportfolios'
import { useState } from 'react'

const allCategories = [
  'All',
  ...new Set(portfolios.map((item) => item.category)),
]
const PortfolioPage = () => {
  // eslint-disable-next-line
  const [categories, setCategories] = useState(allCategories)
  const [menuItems, setMenuItems] = useState(portfolios)

  const filter = (category) => {
    if (category === 'All') {
      setMenuItems(portfolios)
      return
    }
    const filteredData = portfolios.filter((item) => {
      return item.category === category
    })
    setMenuItems(filteredData)
  }
  return (
    <div className='portfolio-page'>
      <div className='title-portfolio'>
        <Title title={`Portfolios`} span={`Portfolios`} />
      </div>
      <div className='portfolio-data'>
        <Categories filter={filter} categories={categories} />
        <Menuitems menuItems={menuItems} />
      </div>
    </div>
  )
}

export default PortfolioPage
