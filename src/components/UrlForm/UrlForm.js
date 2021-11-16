import React, { Component } from 'react';
import { sendUrl } from '../../apiCalls';

class UrlForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      title: '',
      urlToShorten: ''
    };
  }

  handleNameChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const request = {
      long_url: this.state.urlToShorten,
      title: this.state.title
    }
    sendUrl(request)
      .then(response => this.props.addUrl(response))
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({title: '', urlToShorten: ''});
  }

  render() {
    return (
      <form>
        <input
          id="inputTitle"
          type='text'
          placeholder='Title...'
          name='title'
          value={this.state.title}
          onChange={event => this.handleNameChange(event)}
        />

        <input
          id="inputUrl"
          type='text'
          placeholder='URL to Shorten...'
          name='urlToShorten'
          value={this.state.urlToShorten}
          onChange={event => this.handleNameChange(event)}
        />

        <button
          id="submitButton"
          onClick={e => this.handleSubmit(e)}>
          Shorten Please!
        </button>
      </form>
    )
  }
}

export default UrlForm;
