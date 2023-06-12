import React, { useState } from 'react';

const UrlForm = ({ handleShorten }) => {
  const [title, setTitle] = useState("");
  const [urlToShorten, setUrlToShorten] = useState("");

  const clearInputs = () => {
    setTitle("");
    setUrlToShorten("");
  }

  const handleSubmit = () => {
    handleShorten(title, urlToShorten);
    clearInputs();
  };

  return(
    <form>
    <input
      className="title-field"
      type='text'
      placeholder='Title...'
      name='title'
      value={title}
      onChange={(event) => setTitle(event.target.value)}
    />

    <input
      className="url-field"
      type='text'
      placeholder='URL to Shorten...'
      name='title'
      value={urlToShorten}
      onChange={(event) => setUrlToShorten(event.target.value)}
    />

    <button className="shorten-button" type="button" onClick={handleSubmit}>
      Shorten Please!
    </button>
  </form>
  )
}

export default UrlForm;
