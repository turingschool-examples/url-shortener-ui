import React, { Component } from 'react';
import './App.css';
import { getUrls, postNewUrl } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    }
    console.log(this.state.urls)
  }

  addUrl = (newUrl) => {
    postNewUrl(newUrl)
      .then(response => response.json())
      .then(data => this.setState({urls: [...this.state.urls, data]}))
      .catch(error => console.error('Error fetching:', error));
  }

  componentDidMount() {
    getUrls()
      .then(data => this.setState({ urls: data.urls }))
      .catch(error => console.error('Error fetching:', error))
  }
  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm addUrl={this.addUrl}/>
        </header>
        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
