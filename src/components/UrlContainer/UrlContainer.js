import React from 'react';
import './UrlContainer.css';
import Url from '../Url/Url'

const UrlContainer = props => {
  const urlEls = props.urls.map(url => {
    return (
      <Url
      key={url.id}
      id={url.id}
      title={url.title}
      short={url.short_url}
      long={url.long_url}
      />
    )
  });

  return (
    <section>
      { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
    </section>
  )
}

export default UrlContainer;
