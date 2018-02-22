import React from 'react';
import {shallow} from 'enzyme';
import { initialApiCall, swornMemberCall } from './api';
import {mockHouseArray} from './mockData';

describe('initial Api call', () => {
 let wrapper;
 beforeEach( () => {
  window.fetch = jest.fn().mockImplementation( () => Promise.resolve({
    status: 200,
    json: () => Promise.resolve({
      results: mockHouseArray
    })
  }))
 })
  it('should be called with the right parameters', async () => {
    const results = await initialApiCall();
    expect(window.fetch).toHaveBeenCalledWith("http://localhost:3001/api/v1/houses")
  })

  it('returns data when the status is ok', async () => {
    window.fetch = jest.fn().mockImplementation( () => Promise.resolve({
    status: 200,
    json: () => Promise.resolve({
      results: mockHouseArray
    })
  }))
    const results = await initialApiCall();
    console.log(results);
    expect(results.results).toEqual(mockHouseArray)
  })

  it('should catch an error if it fails', async () => {
    window.fetch = jest.fn().mockImplementation( () => new Promise((resolve, reject) => {
      reject(new Error('failed'))
    }))
    const results = await initialApiCall();
    expect(results).toEqual("Error fetching data")
  })
})

describe("swornMemberCall", () => {
  beforeEach( () => {

    window.fetch = jest.fn().mockImplementation( () => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        results: {}
      })
    }))
  })

  it.only('should be called with the right params', async () => {
    const results = await swornMemberCall([]);
  })

  it('returns data when the status is ok', async () => {

  })

  it('should catch an error if it fails', async () => {

  })
})
