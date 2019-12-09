// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import Controls from './Controls.js'
import Dashboard from '../dashboard/Dashboard.js'

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

  const { getByText } = render(
    <Dashboard>
      <Controls />
    </Dashboard>
  )
  
  fireEvent.click(getByText(/close gate/i))

  getByText(/open gate/i)
})

test('provide buttons to toggle the closed and locked states', () => {
  const { getAllByText } = render(<Controls />)
  const buttons = getAllByText(/gate/i)

  expect(buttons).toBeDefined();
  })

test('buttons text changes to reflect the state the door will be in if clicked', () => {
  const toggleOpen = jest.fn()
  
  const { getByText } = render(
    <Dashboard>
      <Controls toggleClosed={toggleOpen} />
    </Dashboard>
  )
  fireEvent.click(getByText(/close gate/i))

  const openButton = getByText(/open gate/i)
  expect(openButton).toBeDefined()
})

test('the closed toggle button is disabled if the gate is locked', () => {
  
  const toggleClosedMock = jest.fn()
    
  const { getByText } = render(
    <Dashboard>
      <Controls locked={true} toggleClosed={toggleClosedMock}/>
    </Dashboard>
  )
  
  fireEvent.click(getByText(/close gate/i))

  expect(toggleClosedMock).not.toHaveBeenCalled()

  })

test('the locked toggle button is disabled if the gate is open', () => {

  const toggleLockedMock = jest.fn()
    
  const { getByText } = render(
    <Dashboard>
      <Controls closed={false} toggleLocked={toggleLockedMock}/>
    </Dashboard>
  )
  
  fireEvent.click(getByText(/lock gate/i))

  expect(toggleLockedMock).not.toHaveBeenCalled()
  })  