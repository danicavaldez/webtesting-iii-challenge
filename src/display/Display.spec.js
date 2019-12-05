// Test away!
import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display.js';

test('displays if gate is open/closed and if it locked/unlocked', () => {
  const { getByText } = render(<Display />)

  const openedGate = getByText(/open/i)
  const unlockedGate = getByText(/unlocked/i)

  expect(openedGate).toBeDefined()
  expect(unlockedGate).toBeDefined()
})


test('displays Closed if the closed prop is true and Open if otherwise', () => {
 
  const { getByText } = render(<Display />)

  getByText(/open/i) || getByText(/closed/i)
})

test('displays Locked if the locked prop is true and Unlocked if otherwise', () => {

  const { getByText } = render (<Display />)

  getByText(/unlocked/i) || getByText(/locked/i)

})

test('when locked or closed use the red-led class', () => {
  const { container } = render (<Display closed={true} locked ={true} />)
  
  const lockedAndClosed = container.querySelectorAll('.red-led')
  expect(lockedAndClosed.length).toBe(2)

})
