import React, { useState, useEffect } from 'react';
import {postUrl} from '../../apiCalls'

function UrlForm({addUrl}) {
  const [formData, setFormData] = useState({
    long_url: '',
    title: '',
  });


  const [alert, setAlert] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }; 
  
  const submitUrl = (e) => {
    e.preventDefault();
    // if(isFormComplete()) {
      console.log('form data')
      postUrl(formData)
      .then(postResult => {
        addUrl(postResult);
        setFormData({
        long_url: "",
        title: ""})
      })
      // .catch(err => console.error(err)
      
    // } else {
    //   setAlert("Form is incomplete. Please fill in all fields.")
    // }
  }

  return (
    <form>
      <input
        type='text'
        placeholder='Title...'
        name='title'
        value={formData.title}
        onChange={handleChange}
        className='titleInput'
      />

      <input
        type='text'
        placeholder='URL to Shorten...'
        name='long_url'
        value={formData.long_url}
        onChange={handleChange}
        className='urlInput'
      />

      <button onClick={submitUrl}>
        Shorten Please!
      </button>
    </form>
  )
}

export default UrlForm;
