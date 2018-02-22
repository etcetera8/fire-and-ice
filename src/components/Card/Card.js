import React from 'react';
import './Card.css'

export const Card = ({name, founded, seats, titles, coatOfArms, ancestralWeapons, words, swornMembers, clicked}) => {
  
  return (
    <section className='Card' onClick={() => clicked(name)}>
      <span className="house-info">{name}</span>
      <span className="house-info">Founded: {founded}</span>
      <span className="house-info">Seats: {seats}</span>
      <span className="house-info">Titles: {titles}</span>
      <span className="house-info">Coat of Arms: "{coatOfArms}"</span>
      <span className="house-info">Ancestral Weapons: {ancestralWeapons}</span>
      <span className="house-info">Words: {words}</span>
    </section>
  )
}



export default Card;