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

  async postUrl () {
    try {
      const response = await fetch(`http://localhost:3001/api/v1/urls`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body:  JSON.stringify(
          {
            long_url: this.state.urlToShorten,
            title: this.state.title
          }
        )
    });

    if (response.status >= 400 && response.status <= 599) {
      throw new Error('Network response was not OK');
    }

    const json = await response.json() 
    this.props.setNewData(json)
    this.clearInputs();

    return response;
  } catch (error) {
    throw error;
  }
};

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.postUrl()
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
          onChange={e => this.handleNameChange(e)}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='urlToShorten'
          value={this.state.url}
          onChange={e => this.handleNameChange(e)}
        />

        <button onClick={e => this.handleSubmit(e)}>
          Shorten Please!
        </button>
      </form>
    )
  }
}

export default UrlForm;
