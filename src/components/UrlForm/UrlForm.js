import React, { Component } from 'react';

class UrlForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      title: '',
      urlToShorten: ''
    };
  }

  handleNameChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newUrl = {
      id: Date.now(),
      long_url: this.state.urlToShorten,
      title: this.state.title
    }
    this.props.addUrl(newUrl)
    this.clearInputs()

    }

  clearInputs = () => {
    this.setState({title: '', urlToShorten: ''});
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={this.state.title}
          onChange={event => this.handleNameChange(event)}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='title'
          value={this.state.title}
          onChange={event => this.handleNameChange(event)}
        />

        <button onClick={event => this.handleSubmit(event)}>
          Shorten Please!
        </button>
      </form>
    )
  }
}

export default UrlForm;
