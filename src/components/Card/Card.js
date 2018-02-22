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
  
  
  render () {
    const {name, founded, seats, titles, coatOfArms, ancestralWeapons, words, swornMembers} = this.props;
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
          <span>{swornMembers}</span>
        }
      </section>
    )
  }
}



export default Card;