import React, { Component } from 'react';
import './App.css';
import { getUrls} from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';
import {postUrls} from '../../apiCalls'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    }
  }

  componentDidMount() {
    getUrls()
    .then(data => this.setState({urls: data.urls}))
  }

  postData = async (title, urlToShorten) => {
    await postUrls(title, urlToShorten)
    getUrls()
    .then(data => this.setState({urls: data.urls}))
    .catch(error => console.log('Error fetching', error))
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm postData={this.postData} />
        </header>
        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
