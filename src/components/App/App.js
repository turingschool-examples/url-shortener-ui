import React, { Component } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
      error: null
    }
    this.addUrl = this.addUrl.bind(this)
  }

  componentDidMount() {
    getUrls()
      .then(data => this.setState({ urls: data.urls }))
      .catch(error => this.setState({ error: error.message }))
  }

  addUrl = (response) => {
    this.setState({ urls: [...this.state.urls, response] })
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm addUrl={ this.addUrl }/>
        </header>

        <UrlContainer urls={ this.state.urls } />
      </main>
    );
  }
}

export default App;
