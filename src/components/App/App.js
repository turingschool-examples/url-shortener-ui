import React, { useState, useEffect } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export function App()  {
  const [urls, setUrls] = useState([])

  const getData = async () => {
    try {
      const response = await getUrls();
      
      if (!response.ok) {
        throw new Error();
      }
      
      const json = await response.json();
      setUrls(json.urls);
      
    } catch (error) {
      console.log(error);
    }
  };
  
  const setNewData = (data) => {
    setUrls([...urls, data])
  }

  useEffect(() => {
    getData()
  }, []) 

  return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm setNewData ={setNewData}/>
        </header>
        <UrlContainer urls={urls}/>
    </main>
  );
}

export default App;
