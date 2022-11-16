import React, { Component } from 'react';

class UrlForm extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      title: '',
      short_url: ''
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
      ...this.state
    }
    this.props.addUrl(newUrl)
    this.clearInputs()
    }

  clearInputs = () => {
    this.setState({title: '', short_url: ''});
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

        <br/>

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='short_url'
          value={this.state.short_url}
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
