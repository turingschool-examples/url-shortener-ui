import React from 'react';
import UrlCard from '../UrlCard/UrlCard';
import './UrlContainer.css';

const UrlContainer = ({ urls }) => {
  const urlEls = urls.map(url => {
    return (
      <UrlCard
        title={url.title}
        long_url={url.long_url}
        short_url={url.short_url}
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
