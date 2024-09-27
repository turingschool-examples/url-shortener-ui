import React, { useState } from 'react';

function UrlForm({addUrl}) {
  const [title, setTitle] = useState('');
  const [longUrl, setUrlToShorten] = useState('');

  const submitUrls = e => {
    e.preventDefault();
    const newUrl = {
      id: Date.now(),
      long_url: longUrl,
      // short_url: "",
      title: title,
    }
    addUrl(newUrl)
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
        onChange={e =>setTitle(e.target.value) }
      />

      <input
        type='text'
        placeholder='URL to Shorten...'
        name='longUrl'
        value={longUrl}
        onChange={e => setUrlToShorten(e.target.value)}
      />

      <button onClick={e => submitUrls(e)}>
        Shorten Please!
      </button>
    </form>
  )
}

export default UrlForm;
