import React from 'react'
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import UrlForm from './UrlForm'

describe('Url Form', () => {
  beforeEach(() => {
  })
  it('Should render a URL form', () => {
    render(
      <UrlForm 
      />
    )

    expect(screen.getByPlaceholderText('Title...')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('URL to Shorten...')).toBeInTheDocument()
    expect(screen.getByText('Shorten Please!')).toBeInTheDocument()
  })

  it('Should update as data is entered by a user', () => {
    render(
      <UrlForm 
      />
    )
    
    userEvent.type(screen.getByPlaceholderText('Title...'),'bees knees')
    expect(screen.getByDisplayValue('bees knees')).toBeInTheDocument()
    userEvent.type(screen.getByPlaceholderText('URL to Shorten...'),'squeezy cheese')
    expect(screen.getByDisplayValue('squeezy cheese')).toBeInTheDocument()
  })
})