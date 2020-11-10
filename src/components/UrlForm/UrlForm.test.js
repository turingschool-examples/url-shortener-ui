import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import UrlForm from './UrlForm';

describe('UrlForm', () => {
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
  it('should render form elements', () => {

    render(
      <UrlForm urls={mockUrls} />
    )

    expect(screen.getByRole('button', { name: /shorten please!/i })).toBeInTheDocument();
  })
})
