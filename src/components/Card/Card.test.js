import React from 'react';
import { shallow } from 'enzyme';
import {Card} from './Card';

describe('Card', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Card />)
    console.log(wrapper.debug())
    expect(wrapper).toMatchSnapshot();
  })
})