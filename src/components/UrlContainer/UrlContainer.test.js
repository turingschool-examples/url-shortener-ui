import React from "react";
import { render, waitFor, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from '@testing-library/user-event'
import UrlContainer from './UrlContainer.js'

describe('UrlContainer', () => {
  beforeEach(() => {
    render(
      <UrlContainer urls={[
        {
          "id": 1,
          "long_url": "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
          "short_url": "http://localhost:3001/useshorturl/1",
          "title": "Awesome photo"
      },
      {
          "long_url": "https://github.com/MichaelEWalker87/url-shortener-ui",
          "title": "Michael Walker",
          "id": 2,
          "short_url": "http://localhost:3001/useshorturl/2"
      },
      ]}/>
    ); 
  })

  it('should render the UrlContainer', () => {

  })
  
})
