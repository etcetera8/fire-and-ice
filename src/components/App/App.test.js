/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App'
import {mockHouseArray} from '../../mockData.js'

describe('App', () => {
  it('should have a default state of loading set to true', () => {
    const wrapper = shallow(<App addHousesToStore = {jest.fn()}/>)
    expect(wrapper.state().loading).toEqual(true)
  })

  it("the make cards function should return an array of cards", () => {
      const wrapper = shallow(<App
       addHousesToStore = {jest.fn()}
       houseArray={mockHouseArray}
       />)
      const inst = wrapper.instance();
      const results = inst.makeCards(mockHouseArray)
      expect(results.length).toEqual(4)
  })

  it('the mapStateToProps should return an object' ,() => {
    const mockState = {addHouses: 'houses'}
    const wrapper = shallow(<App addHousesToStore = {jest.fn()}/>)
    const results = mapStateToProps(mockState);

    expect(results).toEqual({houseArray: 'houses'})
  })

  it('the mapDispatchToProps should return an object with keys and fuctions as values', () => {
    const results = mapDispatchToProps();
    expect(Object.keys(results)).toEqual(['addHousesToStore'])
  })
})