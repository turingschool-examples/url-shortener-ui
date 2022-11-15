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
  
  handleSubmit = (event) => {
    event.preventDefault()

    const newUrl = {
      id: Date.now(),
      ...this.state
    }

    this.props.addUrl(newUrl)
    this.clearInputs()
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.clearInputs();
  // }

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
          type='url'
          placeholder='URL to Shorten...'
          name='urlToShorten'
          value={this.state.urlToShorten}
          onChange={e => this.handleNameChange(e)}
        />

        <button onClick={e => this.submitUrl(e)}>
          Shorten Please!
        </button>
      </form>
    )
  }
}

export default UrlForm;
