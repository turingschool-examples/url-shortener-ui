import React, { useState, useEffect } from 'react';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';
import { getUrls } from '../../apiCalls';
import './App.css';

function App () {
  const [urls, setURLS] = useState([])

  const updateURLS = async () => {
    const data = await getUrls();
    setURLS(data);
  }

  const handleShorten = async (title, urlToShorten) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/urls', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          long_url: urlToShorten,
          title: title,
        })
      })
      if (response.ok) {
        await updateURLS();
      } else {
        console.log('There was an error:', response.statusText);
      }
    } catch (error) {
      console.log('There was an error', error);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      await updateURLS();
    }
  
    fetchData();
  }, [])

  return(
    <main className="App">
      <header>
        <h1 className="page-title">URL Shortener</h1>
        <UrlForm handleShorten={handleShorten}/>
      </header>
      <UrlContainer urls={urls}/>
    </main>
  )
}

export default App;
