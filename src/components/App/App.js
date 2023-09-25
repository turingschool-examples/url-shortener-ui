import React, { useState, useEffect } from 'react';
import './App.css';
import { getUrls, postUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

function App () {
  const [urls, setUrls] = useState([]);
  const [error, setError] = useState('')
  
  useEffect(() => {
    getUrls()
    .then(data => setUrls(data.urls))
    .catch(err => setError(`${err.message}`))
  }, [])

  const addUrl = (inputURL) => {
    postUrls(inputURL)
    .then(data => setUrls([...urls, data]))
    .catch(err => setError(`${err.message}`))
  }

  return (
    <main className="App">
      <header>
        <h1>URL Shortener</h1>
        <UrlForm addUrl={addUrl}/>
      </header>
      {error && <p>{error}</p>}
      {!error &&  <UrlContainer urls={urls}/>}
    </main>
  );
}

export default App;
