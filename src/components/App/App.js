import React, { useState, useEffect } from 'react';
import './App.css';
import { getUrls, postUrl } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

function App() {
  const [urls, setUrls] = useState([]);
  const [error, setError] = useState('');
  const [postError, setPostError] = useState('');

  useEffect(() => {
    setError('')
    getUrls()
      .then(data => setUrls(data.urls))
      .catch(error => setError(error.message));
  }, []);

  const addUrl = url => {
    postUrl(url)
      .then(data => setUrls(prev => [...prev, data]))
      .catch(error => setPostError(error.message));
  };

  return (
    <main className='App'>
      <header>
        <h1 className='heading'>URL Shortener</h1>
        {postError && <p className='postError'>{postError}</p>}
        <UrlForm addUrl={addUrl} />
      </header>
      <UrlContainer urls={urls} error={error}/>
    </main>
  );
}

export default App;
