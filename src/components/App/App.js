import React, { useState, useEffect } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

function App () {
  const [urls, setUrls] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)

  function getUrlData(){
    getUrls()
    .then((data) => {
      setUrls(data)
      setIsLoaded(true)
    }
  )
  }
  function addUrl(newUrl){
    setUrls([ ...urls, newUrl ])
    .then (getUrlData())
  }
  

  function deleteUrl(id) {
    console.log("id", id)
    const filteredUrls = urls.filter(url => url.id !== id);
    setUrls(filteredUrls)
  }

  useEffect(() => {
   getUrlData()
   console.log("urls", urls)
  }, [])

  useEffect(() => {
    getUrlData();
  }, [urls]);
  return (
    <main className="App">
      <header>
        <h1>URL Shortener</h1>
        <UrlForm addUrl={addUrl}/>
      </header>
      {isLoaded ? 
      <UrlContainer urls={urls} deleteUrl={deleteUrl}/> : <p>Loading . . .</p>
}
    </main>
  );
}

export default App;
