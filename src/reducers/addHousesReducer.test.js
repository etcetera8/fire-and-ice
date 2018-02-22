/* eslint-disable */
import { addHouses } from './addHousesReducer';

describe('addhouseseReducer', () => {
  it('shoud return the defualt state if no arguments given', () => {
    const state = [];
    const results = addHouses(state, {type:"thing"})
    expect(results).toEqual([])
  })

  it('should return the action payload if the right type is given', () => {
    const state = [];
    const results = addHouses( state, {type:"ADD_HOUSES", payload: "A house"});
    expect(results).toEqual('A house')
  })
})