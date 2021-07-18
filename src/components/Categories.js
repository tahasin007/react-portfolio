import React from 'react'

const Categories = ({ filter, categories }) => {
  return (
    <div className='buttons'>
      {categories.map((cat, i) => {
        return (
          <button
            className='btn-port'
            type='button'
            key={i}
            onClick={() => filter(cat)}
          >
            {cat}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
