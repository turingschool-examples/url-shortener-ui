import React from 'react';
import './UrlContainer.css';
import scissors from '../../scissors.jpg'

const UrlContainer = ({urls, deleteUrl}) => {
  console.log("urls", urls)
  console.log("urls.urls[0]", urls.urls[0])

  const urlEls = urls.urls.map(url => {
    return (
      <div className="url" key={url.id}>
        <h3>{url.title}</h3>
        <a href={url.short_url} target="blank">{url.short_url}</a>
        {/* <p>{url.long_url}</p> */}
        <img src={scissors} id={url.id} key={url.id}></img>
        <button onClick= {()=> deleteUrl(url.id)}>delete</button>
      </div>
    )
  });

  return (
    <section>
      <p>hi</p>
      { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
    </section>
  )
}

export default UrlContainer;
