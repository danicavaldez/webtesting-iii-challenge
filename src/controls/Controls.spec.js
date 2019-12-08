// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import Controls from './Controls.js'

test('Gate defaults to unlocked and open', () => {
  const { getByText } = render(<Controls />)

  getByText(/close gate/i)
  getByText(/lock gate/i)
})

test('Gate cannot be closed or opened if it is locked', () => {
  const { getByText } = render(<Controls locked={true} />)
  
  const toggleGate = jest.fn()

  const button = getByText(/close gate/i)

  fireEvent.click(button)

  expect(toggleGate).not.toHaveBeenCalled()
})

test('buttons text changes to reflect the state the door will be in if clicked', () => {
  const toggleClosed = jest.fn()

  const { getByText } = render(<Controls locked={false} closed={false} toggleClosed={toggleClosed} />)

  const closeButton = getByText(/close gate/i)

  expect(closeButton).toBeDefined()

  fireEvent.click(closeButton)

  const openButton = getByText(/open gate/i)

  expect(openButton).toBeDefined()
})