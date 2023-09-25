import React, { useState } from 'react';

function UrlForm({addUrl}) {
  // const [title, setTitle] = useState('');
  // const [urlToShorten, setUrlToShorten] = useState('');
  const [formData, setFormData] = useState({
    title:'',
    long_url: ''
  })

  const handleSubmit = e => {
    e.preventDefault();
    addUrl(formData)
    clearInputs();
  }

  const handleChange = e => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }
  // const clearInputs = () => {
  //   setTitle('');
  //   setUrlToShorten('');
  // }

  const clearInputs = () => {
    setFormData({title:'', long_url:''});
  }

  return (
    <form>
      <input
        type='text'
        placeholder='Title...'
        name='title'
        value={formData.title}
        onChange={handleChange}
        // onChange={e => }
      />

      <input
        type='text'
        placeholder='URL to Shorten...'
        name='long_url'
        value={formData.long_url}
        onChange={handleChange}
        // onChange={e => }
      />

      <button onClick={e => handleSubmit(e)}>
        Shorten Please!
      </button>
    </form>
  )
}

export default UrlForm;
