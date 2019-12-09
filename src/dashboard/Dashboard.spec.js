// Test away
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Dashboard from './Dashboard.js'

test('Shows control and display', () => {
  const { getByText } = render(<Dashboard />)

  const controls = getByText(/close gate/i)
  const display = getByText(/open/i)
  
  expect(controls).toBeDefined()
  expect(display).toBeDefined()
})



