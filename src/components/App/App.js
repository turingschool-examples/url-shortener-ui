import React, { useState, useEffect } from 'react';
import './App.css';
import { getUrls, postUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

function App () {
  const [urls, setUrls] = useState([]);
  const [postStatus, setPostStatus] = useState("");

  useEffect(() => {
    getUrls()
      .then((data) => {
        setUrls(data.urls);
      })
  }, [])

  const handlePost = (information) => {
    postUrls(information)
      .then((data) => {
        console.log({data});
        setPostStatus("Success")
        setUrls((data) => {
          return [ ...urls, data ]
        })
      })
  }

  return (
    <main className="App">
      <header>
        <h1>URL Shortener</h1>
        <UrlForm handlePost={handlePost} />
      </header>
      <p className="post-message">{postStatus}</p>
      <UrlContainer urls={urls}/>
    </main>
  );
}

export default App;
