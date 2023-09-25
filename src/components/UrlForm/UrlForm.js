import React, { useState } from 'react';

function UrlForm({addUrl}) {
  const [formData, setFormData] = useState({
    title:'',
    long_url: ''
  })
  const [alert, setAlert] = useState('')

  const isFormIncomplete = () => {
    return Object.values(formData).some(input => input === '')
  }

  const handleSubmit = e => {
    e.preventDefault();

    if(!isFormIncomplete()) {
      addUrl(formData)
      clearInputs();
    } else {
      setAlert('Please fill out all input fields')
    }
  }

  const handleChange = e => {
    setAlert('')
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

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
      />

      <input
        type='text'
        placeholder='URL to Shorten...'
        name='long_url'
        value={formData.long_url}
        onChange={handleChange}
      />
      <button onClick={e => handleSubmit(e)}>
        Shorten Please!
      </button>
      <p>{alert}</p>
    </form>
  )
}

export default UrlForm;
