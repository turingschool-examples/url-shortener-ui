import React, { Component } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';
import { postNewUrl } from '../../apiCalls';
import { deleteUrl } from '../../apiCalls';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
      erorrs: ""
    }
  }

  componentDidMount() {
    this.getUrl();
  };
  getUrl = async () => {
    try {
      const urls = await getUrls();
      const data = await urls.json();
      this.setState({ urls: data.urls });
    } catch {
      this.setState({
        errors: "Not responding, try again later",
      });
    }
  };

  addUrl = (newUrl) => {
    postNewUrl(newUrl)
    .then(data => {
      this.setState({urls: [...this.state.urls, data]})
    })
    .catch(error => {
      this.setState({errors: error.message})
    })
  }

  deleteSelectedUrl = (urlID) => {
    deleteUrl(urlID)
      .then(() => {
        const updatedUrls = this.state.urls.filter((url) => url.id !== urlID);
        this.setState({ urls: updatedUrls });
      })
      .catch((error) => {
        this.setState({ errors: error.message });
      });
  };

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm addUrl={this.addUrl}/>
        </header>
        <UrlContainer urls={this.state.urls} deleteSelectedUrl={this.deleteSelectedUrl} />
      </main>
    );
  }
}

export default App;
