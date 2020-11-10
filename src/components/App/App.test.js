import React from 'react';
import App from './App';
import '@testing-library/jest-dom';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import { getUrls, postUrl } from '../../apiCalls';
jest.mock('../../apiCalls');

getUrls.mockResolvedValue({
              urls: [
                      {
                        id: 1,
                        long_url: "https://images.unsplash.com/photo-1470114716159-e389f8712fda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
                        short_url: "http://localhost:3001/useshorturl/1",
                        title: "Awesome photo"
                      },
                      {  id: 1,
                        long_url: "https://www.google.com/search?q=steampunk+images&rlz=1C5CHFA_enUS886US886&oq=&aqs=chrome.0.69i59i450l8.397114599j0j15&sourceid=chrome&ie=UTF-8",
                        short_url: "http://localhost:3001/useshorturl/2",
                        title: "Random steampunk image"
                      }
                    ]
})

describe('App', () => {
  it('Should render ui content on page load', () => {
    render(
      <App />
    )
    let heading = screen.getByRole('heading', { name: /url shortener/i })
    let button = screen.getByRole('button', { name: /shorten please!/i })

    expect(heading).toBeInTheDocument()
    expect(button).toBeInTheDocument()

  })  
    it('Should allow user to see urls on the dom', () => {
      render(
        <App />
      )

      waitFor(() => {
        let title1 = screen.getByText("Awesome photo")
        expect(title1).toBeInTheDocument()
      })
    })
  })
