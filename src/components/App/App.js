import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addHouses } from '../../actions';
import { initialApiCall } from '../../api.js';
import gif from '../../gear.gif';
import Card from '../Card/Card';

export class App extends Component {
  constructor(props) {
    super(props),
    this.state = {
      loading: true
    }
  }

  componentDidMount = async () => {
    const houses = await initialApiCall()
    await this.props.addHousesToStore(houses)
    this.setState({loading: false})
  }

  makeCards = (array) => {
    const cardArray = array.map( (house, index) =>
      <Card
        house={house}
        key={index}
      />
    )
    return cardArray;
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
          { this.state.loading &&
            <img src={gif} />
          } 
          { this.props.houseArray &&
            this.makeCards(this.props.houseArray)
          }
        </div>
      </div>
    );
  }
}

App.propTypes = {
  houseArray: PropTypes.array.isRequired,
  addHousesToStore: PropTypes.func.isRequired
};

export const mapStateToProps = ( state ) => ({ 
  houseArray: state.addHouses
});

export const mapDispatchToProps = dispatch => ({ 
  addHousesToStore: (houseArray) => dispatch(addHouses(houseArray))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
