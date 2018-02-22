import React from 'react';
import {addHouses} from './index.js';

describe('Actions', () => {
  it('the addhouse function should return an object with the type and payload', () => {
    const payload = ['houses']
    const expected = { type: 'ADD_HOUSES', payload: [ 'houses' ] }
    const results = addHouses(payload);
    expect(results).toEqual(expected);
  })
})
