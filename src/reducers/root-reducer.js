import { combineReducers } from 'redux';
import { fake } from './fake-reducer';
import { addHouses } from './addHousesReducer';

const rootReducer = combineReducers({
  fake,
  addHouses
});


export default rootReducer;
