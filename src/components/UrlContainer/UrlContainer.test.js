import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import UrlContainer from './UrlContainer'

describe('Url Container', () => {
  beforeEach(() => {
    const mockUrls = [
      {
        id: 1,
        long_url: "iamaveryloooongurl.com",
        short_url: "short.co",
        title: "hey it's a url"
      }
    ]
  })
  it('Should render a URL card', () => {
    render(
      <UrlContainer 
        urls={mockUrls}
      />
    )
  })
})