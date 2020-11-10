import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react'
import UrlContainer from './UrlContainer'

  describe('UrlContainer', () => {
    it('should rendeer headings and anchor tags appropriately', () => {
      let urls = [
        {
          id: 1,
          long_url: "https://images.unsplash.com/photo-1470114716159-e389f8712fda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
          short_url: "http://localhost:3001/useshorturl/1",
          title: "Awesome photo"
        },
        {  id: 1,
          long_url: "https://www.google.com/search?q=steampunk+images&rlz=1C5CHFA_enUS886US886&oq=&aqs=chrome.0.69i59i450l8.397114599j0j15&sourceid=chrome&ie=UTF-8",
          short_url: "http://localhost:3001/useshorturl/2",
          title: "Random steampunk photo"}
      ]
    })
      render(
        <UrlContainer urls={this.state.urls}/>
      )
  })
//
