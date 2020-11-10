import React, { Component } from 'react';
import './App.css';
import { getUrls, postUrl } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    }
  }

  componentDidMount () {
    getUrls()
      .then((response) => {
        this.setState({
          urls: response.urls
        })
      })
      .catch(error => console.log('fetch', error))
  }

  submitUrl = async (userUrl, userTitle) => {
    try {
      const data = await postUrl(userUrl, userTitle);
      if (this.state.urls.length > 0) {
				this.setState({ urls: [...this.state.urls, data] });
			} else {
				this.setState({ urls: [data] });
			}
		} catch (error) {
			console.log('post', error.message);
		}
	}


  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm submitUrl={this.submitUrl}/>
        </header>

        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
