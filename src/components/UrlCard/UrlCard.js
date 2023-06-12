import React from 'react';
import './UrlCard.css';

const UrlCard = ({title, long_url, short_url}) => {

  return (
    <section className="url">
      <h3>{title}</h3>
      <a href={short_url} target="blank">{short_url}</a>
      <p>{long_url}</p>
    </section>
  )
}

export default UrlCard;