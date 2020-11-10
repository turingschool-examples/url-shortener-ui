import React from 'react'
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import UrlForm from './UrlForm'

describe('Url Form', () => {
  beforeEach(() => {
  })
  it('Should render a URL form', () => {

    render(
      <UrlForm 
      />
    )
    screen.debug()
    expect(screen.getByPlaceholderText('Title...')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('URL to Shorten...')).toBeInTheDocument()
    expect(screen.getByText('Shorten Please!')).toBeInTheDocument()
  })
})