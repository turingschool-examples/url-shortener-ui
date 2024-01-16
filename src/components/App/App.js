import React, { useState, useEffect } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

function App () {
  const [urls, setUrls] = useState([]);
  const [title, setTitle] = useState("");
  const [urlToShorten, setUrlToShorten] = useState("");


  function addUrl(url) {
    const postUrl = () => {
      return fetch("http://localhost:3001/api/v1/urls", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: Date.now(),
          title: url.title,
          long_url: url.urlToShorten,
          short_url: url.urlToShorten
        })
      }).then((response) => response.json())
    }
    postUrl(url)
    .then((data) => {
      setUrls([...urls, data]);
      console.log("POST", data)
    })
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
        <UrlForm addUrl={addUrl} title={title} urlToShorten={urlToShorten} setTitle={setTitle} setUrlToShorten={setUrlToShorten} />
      </header>
      <UrlContainer urls={urls}/>
    </main>
  );
}

export default App;
