import React from "react";
import { render, waitFor, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from '@testing-library/user-event'
import UrlFrom from './UrlForm.js'

describe('UrlForm', () => {
  let postMock, button, titleInput, urlInput;
  beforeEach(() => {
    postMock = jest.fn()
    render(
      <UrlFrom postData={postMock}/>
    ); 
    button = screen.getByRole("button", {name: /shorten please/i})
    titleInput = screen.getByPlaceholderText("URL to Shorten...")
    urlInput = screen.getByPlaceholderText("Title...")
  })

  it('should render the form to the page', () => {
    expect(button).toBeInTheDocument()
    expect(titleInput).toBeInTheDocument()
    expect(urlInput).toBeInTheDocument()
  })
  
  it('Submit button should be disabled when values are empty', () => {
    expect(button).toBeDisabled()
    userEvent.type(titleInput, "Name")
    userEvent.type(urlInput, "https://frontend.turing.io/lessons/module-2/network-requests-gets-and-posts.html")
    expect(button).toBeEnabled()
  })

  it('should allow the user to input a value', () => {
    userEvent.type(titleInput, "Name")
    userEvent.type(urlInput, "https://frontend.turing.io/lessons/module-2/network-requests-gets-and-posts.html")
    userEvent.click(button)
    expect(postMock).toHaveBeenCalled()
  })
  
  
})
