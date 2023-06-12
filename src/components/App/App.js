import React, { Component, useState, useEffect, useCallback } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

const App = () => {
  const [urls, setUrls] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const fetchUrls = useCallback(async() => {
    try {
      const response = await getUrls();
      setUrls(response.urls);
    } catch (error) {
      setErrorMsg(error.message);
    }
  }, []);

  useEffect(() => {
    fetchUrls();
  }, [fetchUrls]);

  return (
    <main className="App">
      <header>
        <h1>URL Shortener</h1>
        <UrlForm />
      </header>

      <UrlContainer urls={urls}/>
    </main>
  );
}

export default App;