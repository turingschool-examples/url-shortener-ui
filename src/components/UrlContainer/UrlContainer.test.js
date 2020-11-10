import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import UrlContainer from './UrlContainer';

describe('UrlContainer', () => {
  const mockUrls = [
    {
            "id": 1,
            "long_url": "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
            "short_url": "http://localhost:3001/useshorturl/1",
            "title": "Awesome photo"
        },
        {
            "long_url": "https://www.amazon.com/s?rh=n%3A21413790011&s=featured-rank&pf_rd_p=097064c7-e447-49d3-a10e-64c27322feeb&pf_rd_r=5A75RA39MYC1Z3VM0MZF&ref=tbyb_gw_top_quadcard_w_nov_hol_softcozy_1",
            "title": "vat",
            "id": 2,
            "short_url": "http://localhost:3001/useshorturl/2"
        }
  ]
  it('should render titles of each url object from urls array', () => {

    render(
      <UrlContainer
      urls={mockUrls} />
    )

    expect(screen.getByRole('heading', { name: /awesome photo/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /vat/i })).toBeInTheDocument();
  })

  it('should render shortened urls for each url object from urls array', () => {
    render(
      <UrlContainer
      urls={mockUrls} />
    )
    expect(screen.getByRole('link', { name: 'http://localhost:3001/useshorturl/1' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'http://localhost:3001/useshorturl/2' })).toBeInTheDocument()
  })

  it('should render full urls for each url object from urls array', () => {
    render(
      <UrlContainer
      urls={mockUrls} />
    )

    expect(screen.getByText('https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')).toBeInTheDocument();
    expect(screen.getByText('https://www.amazon.com/s?rh=n%3A21413790011&s=featured-rank&pf_rd_p=097064c7-e447-49d3-a10e-64c27322feeb&pf_rd_r=5A75RA39MYC1Z3VM0MZF&ref=tbyb_gw_top_quadcard_w_nov_hol_softcozy_1')).toBeInTheDocument()
  })

})
