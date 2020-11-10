import React from 'react';
import {render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from './App';
import { getUrls, postUrl } from '../../apiCalls';
jest.mock('../../apiCalls.js')

describe('App', () => {

  describe('App initial render', () => {

    it('Should render initial view of App', () => {
      render(
        <App />
      )
  
      expect(screen.getByText('URL Shortener')).toBeInTheDocument()
  
      expect(screen.getByPlaceholderText('Title...')).toBeInTheDocument()
      expect(screen.getByPlaceholderText('URL to Shorten...')).toBeInTheDocument()
      expect(screen.getByText('Shorten Please!')).toBeInTheDocument()
      
      expect(screen.getByText('No urls yet! Find some to shorten!')).toBeInTheDocument()
    })
  })

  describe('Async render', () => {
    beforeEach(() => {
      getUrls.mockResolvedValue({
        urls: [
            {
              id: 1,
              long_url: "iamaveryloooongurl.com",
              short_url: "short.co",
              title: "hey it's a url"
            }
          ]
        }
      )

      postUrl.mockResolvedValue({
        id: 2,
        long_url: "uuuuuurrrrrrrrllllll.ccccoooooooommmmm",
        short_url: "url.com",
        title: "another url"
      })

    })
    
    it('Should render existing URLs from database', async () => {
      render(<App />)
      
      const header = await waitFor(() => (screen.getByText('URL Shortener')))

      const url1 = {
        title: screen.getByText("hey it's a url"),
        short_url: screen.getByText("short.co"),
        long_url: screen.getByText("iamaveryloooongurl.com")
      }
      expect(header).toBeInTheDocument()
      expect(url1.title).toBeInTheDocument()
      expect(url1.short_url).toBeInTheDocument()
      expect(url1.long_url).toBeInTheDocument()      
    })

    it('Should render all App components when user fills and submits form', async () => {
      const mockAddUrl = jest.fn()
      render(
      <App 
        addUrl={mockAddUrl}
      />)
      
      userEvent.type(screen.getByPlaceholderText('Title...'),'another url')
      userEvent.type(screen.getByPlaceholderText('URL to Shorten...'),'uuuuuurrrrrrrrllllll.ccccoooooooommmmm')
      userEvent.click(screen.getByText('Shorten Please!'))

      const title2 = await waitFor(screen.getByText("another url"))
      // screen.debug()
      expect(title2).toBeInTheDocument()

      //mock something
    })

  })

})
