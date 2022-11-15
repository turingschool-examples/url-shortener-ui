import React from 'react';
import './UrlContainer.css';

const UrlContainer = ({urls}) => {
  const urlEls = urls.map(url => {
    return (
      <div className="url">
        <h3>{url.title}</h3>
        <p><b>Short URL:</b></p><a href={url.short_url} target="blank">{url.short_url}</a>
        <p><b>Original URL:</b> {url.long_url}</p>
      </div>
    )
  });

  return (
    <section>
      { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
    </section>
  )
}

export default UrlContainer;
