import React, { useState, useEffect } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export function App()  {
  const [urls, setUrls] = useState(null)

  const getData = async () => {
    try {
      const response = await getUrls();
      
      if (response.status >= 400 && response.status <= 599) {
        throw new Error();
      }
      
      const json = await response.json();
      console.log(json);
      setUrls(json);
      
      return response;
    } catch (error) {
      throw error;
    }
  };
  

  useEffect(() => {
    getData()
  }, []) 

  return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm />
        </header>

        {urls && <UrlContainer urls={urls}/>}
    </main>
  );
}

export default App;
