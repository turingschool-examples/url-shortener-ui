import React, { Component } from 'react';
import './App.css';
import { getUrls, postUrl } from '../../apiCalls';
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
    .catch(error => this.setState({error: 'Error loading URLs, please try again!'}))
}

addUrl = newUrl => {
  postUrl(newUrl)
  .then(data => this.setState({urls: [...this.state.urls, data]}))
}

  render() {
    console.log(this.state.urls)
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm addUrl={this.addUrl} />
        </header>
        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
