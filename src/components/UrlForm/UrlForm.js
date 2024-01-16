import React, { useState } from 'react';

function UrlForm({addUrl, title, urlToShorten, setUrlToShorten, setTitle}) {
  

  const handleSubmit = e => {
    e.preventDefault();
    const newUrl = {
      id: Date.now(),
      title,
      urlToShorten
    }
    addUrl(newUrl);
    clearInputs();
  }

  const clearInputs = () => {
    setTitle('');
    setUrlToShorten('');
  }

  return (
    <form>
      <input
        type='text'
        placeholder='Title...'
        name='title'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <input
        type='text'
        placeholder='URL to Shorten...'
        name='url'
        value={urlToShorten}
        onChange={e => setUrlToShorten(e.target.value) }
      />

      <button onClick={e => handleSubmit(e)}>
        Shorten Please!
      </button>
    </form>
  )
}

export default UrlForm;
