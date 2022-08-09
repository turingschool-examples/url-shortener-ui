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
      isLoading: false
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    fetch('http://localhost:3001/api/v1/urls')
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        this.setState({error: 'There has been an error, please try again.'})
        console.log("Error")
      }
    })
    .then(data => {
      this.setState({
          urls: [...this.state.urls, data],
          isLoading: false,
      })
    })
    .catch(error => {
      this.setState({
        error: error.message,
      })
      console.log("Error")
    })
  }

  render() {
    console.log(this.state)
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
