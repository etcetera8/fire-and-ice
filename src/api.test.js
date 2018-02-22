/* eslint-disable */
import React from 'react';
import {shallow} from 'enzyme';
import { initialApiCall, swornMemberCall } from './api';
import {mockHouseArray, mockSwornMembers} from './mockData';

describe('initial Api call', () => {
 let wrapper;
 beforeEach( () => {
  window.fetch = jest.fn().mockImplementation( () => Promise.resolve({
    status: 200,
    json: () => Promise.resolve(mockHouseArray)
  }))
 })
  it('should be called with the right parameters', async () => {
    const results = await initialApiCall();
    expect(window.fetch).toHaveBeenCalledWith("http://localhost:3001/api/v1/houses")
  })

  it('returns data when the status is ok', async () => {
    window.fetch = jest.fn().mockImplementation( () => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(
        mockHouseArray
      )
    }))

    const results = await initialApiCall();
    expect(results).toEqual(mockHouseArray)
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


  it('should be called with the array of houses', async () => {
    window.fetch = jest.fn().mockImplementation( () => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(
        mockSwornMembers
      )
    }))
    const results = await swornMemberCall(mockSwornMembers);
    const expected = [[{"died": true, "name": "blargus"}, {"died": false, "name": "neb"}]]
    expect(window.fetch).toHaveBeenCalled()
  })

  it('returns data when the status is ok', async () => {
    window.fetch = jest.fn().mockImplementation( () => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(
        mockSwornMembers
      )
    }))
    const results = await swornMemberCall(mockSwornMembers);
    console.log(results[0][0][0]);


  })

  it('should catch an error if it fails', async () => {
    window.fetch = jest.fn().mockImplementation( () => new Promise((resolve, reject) => {
      reject(new Error('failed'))
    }))
  })
})
