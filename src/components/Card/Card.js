import React from 'react';
import './Card.css'

export const Card = ({name}) => {
  return (
    <section className='display-card'>
      <span>{name}</span>
    </section>
  )
}



export default Card;