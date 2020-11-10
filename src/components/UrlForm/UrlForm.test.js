import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import UrlForm from './UrlForm'
describe('UrlForm', () => {
  it('should render the correct elements on the dom', () => {
    let mockSubmitUrl = jest.fn()
    render(
      <UrlForm submitUrl={mockSubmitUrl}/>
    )
      let userTitle = screen.getByPlaceholderText("Title...");
      let userUrl = screen.getByPlaceholderText("URL to Shorten...");
      let button = screen.getByRole('button', { name: /shorten please!/i })

      expect(userTitle).toBeInTheDocument()
      expect(userUrl).toBeInTheDocument()
      expect(button).toBeInTheDocument()
  })

  it('should hold the correct values on change', () => {
    let mockSubmitUrl = jest.fn()
    render(
      <UrlForm submitUrl={mockSubmitUrl}/>
    )
    let userTitle = screen.getByPlaceholderText("Title...");
    let userUrl = screen.getByPlaceholderText("URL to Shorten...");
    fireEvent.change(userTitle, {target: {value: 'New Title'}})
    expect(userTitle.value).toEqual("New Title")
    fireEvent.change(userUrl, {target: {value: 'New Url'}})
    expect(userUrl.value).toEqual("New Url")
  })

  it('should call the post function on button click', () => {
    let mockSubmitUrl = jest.fn()
    render(
      <UrlForm submitUrl={mockSubmitUrl}/>
    )
    let button = screen.getByRole('button', { name: /shorten please!/i })
    fireEvent.click(button)
    expect(mockSubmitUrl).toHaveBeenCalledTimes(1)
  })
})
