import React, { useState, useEffect } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

function App () {
  const [urls, setUrls] = useState([]);


  function addUrl(url) {
    setUrls([...urls, url])
  }

  useEffect(() => {
    fetchUrls()
  }, [])

  const fetchUrls = () => {
    getUrls()
    .then((data) => {
      setUrls(data.urls)
    })
  }
console.log(urls)
  return (
    <main className="App">
      <header>
        <h1>URL Shortener</h1>
        <UrlForm addUrl={addUrl} />
      </header>
      <UrlContainer urls={urls}/>
    </main>
  );
}

export default App;
