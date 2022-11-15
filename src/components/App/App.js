import React, { Component } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      urls: [],
      error: ''
    }
  }

  componentDidMount = () => {
    getUrls()
    .then(data => this.setState({urls: data.urls}))
    .catch(error => this.setState({error: 'Error loading ideas, please try again!'}))
}

addUrl = (newUrl) => {
  this.setState({urls: [...this.state.urls, newUrl]})
}

postUrl = (newUrl) => {
  fetch('http://localhost:3001/api/v1/urls', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: newUrl.id,
        long_url: '',
        short_url: '',
        title: ''
      }),
    })
}

  render() {
    console.log(this.state.urls)
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm />
        </header>
        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
