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
      message: ""
    }
  }

  async componentDidMount() {
    try {
      const urls = await getUrls()
      this.setState(urls)
    } catch (error) {
      this.setState({message: error.message})
    }
  }

  addUrl = async urlToAdd => {
    try {
      const postedUrl = await postUrl(urlToAdd)
      console.log(postedUrl)
      const message = "URL successfully added!"
      this.setState({ urls: [...this.state.urls, postedUrl], message})
    } catch (error) {
      this.setState({message: error.message})
    }
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm 
            addUrl={this.addUrl}
          />
          {this.state.message.length ? <p>{this.state.message}</p> : null }
        </header>

        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
