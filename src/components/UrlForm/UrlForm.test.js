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
        // addUrl={}
      />
    )
      screen.debug()
    expect(screen.getByText('test')).toBeInTheDocument()

  })
})