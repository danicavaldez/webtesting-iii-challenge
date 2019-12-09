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
  const { getByText } = render (<Display closed={true} locked ={true} />)

  const locked = getByText(/locked/i)
  const closed = getByText(/closed/i)
  
  expect(locked.classList.contains('red-led')).toBe(true)
  expect(closed.classList.contains('red-led')).toBe(true)

})

test('when unlocked or open use the green-led class', () => {
  const { getByText } = render (<Display closed={false} locked ={false} />)

  const unlocked = getByText(/unlocked/i)
  const open = getByText(/open/i)
  
  expect(unlocked.classList.contains('green-led')).toBe(true)
  expect(open.classList.contains('green-led')).toBe(true)

})
