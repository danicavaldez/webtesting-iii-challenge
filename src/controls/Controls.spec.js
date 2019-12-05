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

