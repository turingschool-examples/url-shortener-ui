import React from 'react'
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import UrlContainer from './UrlContainer'

describe('Url Container', () => {
  beforeEach(() => {
  })
  it('Should render a URL card', () => {
    const mockUrls = [
      {
        id: 1,
        long_url: "iamaveryloooongurl.com",
        short_url: "short.co",
        title: "hey it's a url"
      }
    ]
    
    render(
      <UrlContainer 
        urls={mockUrls}
      />
    )

    expect(screen.getByText(mockUrls[0].title)).toBeInTheDocument()
    expect(screen.getByText(mockUrls[0].long_url)).toBeInTheDocument()
    expect(screen.getByText(mockUrls[0].short_url)).toBeInTheDocument()
  })
})