import React from 'react';
import './UrlContainer.css';

const UrlContainer = ({urls, error}) => {
  const urlEls = urls.map(url => {
    return (
      <div className="url" key={url.id}>
        <h3>{url.title}</h3>
        <a href={url.short_url} target="blank">{url.short_url}</a>
        <p>{url.long_url}</p>
      </div>
    )
  });

  const message = error ? error : "No urls yet! Find some to shorten!"

  return (
    <section>
      { urlEls.length ? urlEls : <p className='message'>{message}</p> }
    </section>
  )
}

export default UrlContainer;

