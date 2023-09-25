import React, { useState, useEffect } from 'react';
import './App.css';
import { getUrls, postUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

function App () {
  const [urls, setUrls] = useState([]);
  
  useEffect(() => {
    getUrls()
    .then(data => setUrls(data.urls))
    .catch(err => console.log(err))
  }, [])

  const addUrl = (inputURL) => {
    postUrls(inputURL)
    .then(data => {
      console.log('data', data)
      setUrls([...urls, data])
    })
    .catch(err => console.log(err))
  }

  return (
    <main className="App">
      <header>
        <h1>URL Shortener</h1>
        <UrlForm addUrl={addUrl}/>
      </header>

      <UrlContainer urls={urls}/>
      {/* <UrlContainer urls={"<<<Urls should go here>>>"}/> */}
    </main>
  );
}

export default App;
