import React from 'react'
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from './App'

describe('App', () => {
  beforeEach(() => {
  })

  it('Should render App render', () => {
    render(
      <App 
      />
    )
screen.debug()
    expect(screen.getByText('URL Shortener')).toBeInTheDocument()

    expect(screen.getByPlaceholderText('Title...')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('URL to Shorten...')).toBeInTheDocument()
    expect(screen.getByText('Shorten Please!')).toBeInTheDocument()
    
    expect(screen.getByText('No urls yet! Find some to shorten!')).toBeInTheDocument()
  })
})