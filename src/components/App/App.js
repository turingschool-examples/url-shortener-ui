import React, { Component } from 'react';
import './App.css';
import { getUrls, postUrls, deleteUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      urls: []
    }
  }

  componentDidMount() {
    getUrls()
      .then(data => this.setState({ urls: data.urls }))
      .catch(error => this.setState({ error: error }))
  }
  
  addUrl = (newUrl) => {
    postUrls(newUrl)
    .then(data => this.setState({ urls: [...this.state.urls, data]}))
  }

  deleteUrl = (url_id) => {
    deleteUrls(url_id)
    .then(newUrl => this.setState({urls: newUrl}))

  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm addUrl={this.addUrl}/>
        </header>
        <UrlContainer urls={this.state.urls} deleteUrl={this.deleteUrl}/>
      </main>
    );
  }
}

export default App;