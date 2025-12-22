import React from 'react'

const Card = ({title, date, image, children}) => {
  return (
    <div className='border border-gray-800 rounded p-1'>
      <div className='flex flex-row '>
        <img className='p-5' src={image} alt={title}/>
        <div className='flex flex-col'>
          <h2>{title}</h2>
          <h3>{date}</h3>
          <div>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Card