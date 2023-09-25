import React, { useState } from 'react';

function UrlForm({ addUrl }) {
  const [title, setTitle] = useState('');
  const [urlToShorten, setUrlToShorten] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (document.querySelector('form').reportValidity()) {
      clearInputs();
      addUrl({ long_url: urlToShorten, title: title });
    }
  };

  const clearInputs = () => {
    setTitle('');
    setUrlToShorten('');
  };

  return (
    <form className='form'>
      <input
        type='text'
        placeholder='Title...'
        name='title'
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />

      <input
        type='text'
        placeholder='URL to Shorten...'
        name='url'
        value={urlToShorten}
        onChange={e => setUrlToShorten(e.target.value)}
        required
      />

      <button onClick={e => handleSubmit(e)}>Shorten Please!</button>
    </form>
  );
}

export default UrlForm;
