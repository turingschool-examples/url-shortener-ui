import React from "react";
import { render, waitFor, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from '@testing-library/user-event'
import { getUrls } from '../../apiCalls';
import App from './App.js'
import  UrlForm from '../UrlForm/UrlForm'

jest.mock('../../apiCalls')

describe('App',  () => {
  let header; 
  beforeEach(async () => {
     await getUrls.mockResolvedValue(
      {urls: [
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
    ]})

  })
  
  it('should be able to render App', async () => {
        render(
          <App />
        ); 
    header = await waitFor (() => screen.getByText(/url shortener/i))
    expect(header).toBeInTheDocument()
  })
  
  it('should fetch all shorteners on render', async () => {
    await render(
      <App />
    ); 
    expect(getUrls).toHaveBeenCalled()
    let cardTitle = screen.getByRole('heading', { name: /awesome photo/i })
    let link = screen.getByRole('link', { name: /http:\/\/localhost:3001\/useshorturl\/1/i })
    expect(cardTitle).toBeInTheDocument()
    expect(link).toBeInTheDocument()
  })
  
  it('should allow the user to submit a form', async () => {
    await render(
      <App />
    ); 
    let button = screen.getByRole("button", {name: /shorten please/i})
    let titleInput = screen.getByPlaceholderText("URL to Shorten...")
    let urlInput = screen.getByPlaceholderText("Title...")
    userEvent.type(titleInput, "name")
    userEvent.type(urlInput, "https://gist.github.com/khalidwilliams/88218c0b4eda47527465ff1e942fb331")
    userEvent.click(button)
    // expect(method in container to have been called)
  })
  
})
