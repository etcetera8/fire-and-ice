import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addHouses } from '../../actions';
import { initialApiCall } from '../../api.js'
import gif from '../../gear.gif'
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
    this.props.addHousestoStore(houses)
    this.setState({loading: false})
  }

  makeCards = () => {
    const cardArray = this.props.houseArray.map( house =>
      <Card 
        name={house.name} 
        coatOfArms={house.coatOfArms}
        founded={house.founded}
        seats={house.seats}
        titles={house.titles}
        words={house.words}
        ancestralWeapons={house.ancestralWeapons}
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
          <button onClick={() => {
            this.props.fakeAction();
            alert(this.props.fake);
          }}> FAKE ACTION</button>
        </div>
        <div className='Display-info'>
          { this.state.loading &&
            <img src={gif} />
          }
          {this.makeCards()}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  fake: shape({ fake: string }),
  fakeAction: func.isRequired
};

const mapStateToProps = ( state ) => ({ 
  houseArray: state.addHouses
});

const mapDispatchToProps = dispatch => ({ 
  addHousestoStore: (houseArray) => dispatch(addHouses(houseArray))
  
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
