import React from 'react';
import {render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from './App';
import { getUrls } from '../../apiCalls';
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

  })

})