import React from 'react';
import { shallow } from 'enzyme';
import {Card} from './Card';
const mockHouse = {
  name:"house",
  founded: 1,
  seats: 2,
  titles: 3,
  coatOfArms: "tvshow",
  ancestralWeapons: "sword",
  words: '',
  swornMembers: ["neb"]
}

describe('Card', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Card house={mockHouse}/>)
    expect(wrapper).toMatchSnapshot();
  })

  it('should have a default state of not clicked', () => {
    const wrapper = shallow(<Card house={mockHouse}/>)
    expect(wrapper.state().clicked).toEqual(false)
  })

  it('when clicked its state should be switched', () => {
    const wrapper = shallow(<Card house={mockHouse}/>)
    const inst = wrapper.instance();
    inst.clicked();
    expect(wrapper.state().clicked).toEqual(true)
  })

  it('should create an jsx array of swornMembers', () => {
    const wrapper = shallow(<Card house={mockHouse}/>)
    const inst = wrapper.instance();
    const results = inst.createMembers([{name: 'neb', gender:'male', died: false}])
    expect(results.length).toEqual(1);
  })
})