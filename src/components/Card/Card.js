import React, { Component } from 'react';
import './Card.css'

export class Card extends Component {
  constructor(props){
    super(props)
    this.state = {
      clicked: false
    }
  }

  clicked = () => {
    console.log(this.state);
    if (this.state.clicked === false) {
      this.setState({clicked: true})
    } else if (this.state.clicked === true) {
      this.setState({clicked: false})
      }
    }

  createMembers = (swornMembers) => {
    const arrayOfMembers = swornMembers.map( member => {
      return <div> Sworn Members
                <span className="house-info">Name: {member.name}</span>
                <span className="house-info">Gender: {member.gender}</span>
                <span className="house-info">Died: {member.died}</span>
              </div>
    })
    return arrayOfMembers
  }
  
  
  render () {
    const {name, founded, seats, titles, coatOfArms, ancestralWeapons, words, swornMembers} = this.props.house;
    return (
      <section className='Card' onClick={this.clicked}>
        <span className="house-info">{name}</span>
        <span className="house-info">Founded: {founded}</span>
        <span className="house-info">Seats: {seats}</span>
        <span className="house-info">Titles: {titles}</span>
        <span className="house-info">Coat of Arms: "{coatOfArms}"</span>
        <span className="house-info">Ancestral Weapons: {ancestralWeapons}</span>
        <span className="house-info">Words: {words}</span>
        {
          this.state.clicked && 
          this.createMembers(swornMembers)
        }
      </section>
    )
  }
}



export default Card;