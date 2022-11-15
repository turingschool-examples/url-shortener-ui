import React, { Component } from 'react';

class UrlForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      title: '',
      urlToShorten: '',
      error: ''
    };
  }
  
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitUrl = (event) => {
    event.preventDefault()

    if (this.state.title === '' && this.state.urlToShorten === '') {
      return this.setState({error: 'Please fill out both inputs!'})

    } else {
      this.props.addUrl({title: this.state.title, urlToShorten: this.state.urlToShorten})
    }
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({title: '', urlToShorten: '', error: ''});
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={this.state.title}
          onChange={event => this.handleChange(event)}
        />

        <input
          type='url'
          placeholder='URL to Shorten...'
          name='urlToShorten'
          value={this.state.urlToShorten}
          onChange={event => this.handleChange(event)}
        />

        <button onClick={event => this.submitUrl(event)}>
          Shorten Please!
        </button>
        <p>{this.state.error}</p>
      </form>
    )
  }
}

export default UrlForm;
