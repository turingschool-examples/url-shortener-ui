import React, { Component } from 'react';
import './App.css';
import { getUrls, postUrl } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
      err: ''
    }
  }

  addUrl = (formData) => {
    postUrl(formData)
    .then(data => {
      console.log('data return', data)
      this.setState({ urls: [...this.state.urls, data] })
    })
    .catch(err => {
      console.log('catch block',err)
      this.setState({ err: err.message })
    })
  }

  componentDidMount() {
    getUrls()
    .then(data => {
      this.setState({ urls: [...data.urls] })
    })
    .catch(err => {
      console.log('catch block',err)
      this.setState({ err: err.message })
    })
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm postData={this.addUrl}/>
        </header>

        <UrlContainer err={this.state.err} urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
