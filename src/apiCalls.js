const getUrls = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/urls')
    if (!response.ok) {
      console.log(response.status)
      throw new Error(response.status)
    }
    const data = await response.json()
    console.log(data)
    return data 
  }
  catch (error) {
    console.log(error.message)
  }
}

const postUrls = async (newUrl) => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/urls', {
      method: 'POST',
      body: JSON.stringify({
        long_url: newUrl.short_url,
        title: newUrl.title
      }),
      headers: {
        'Content-Type': 'application/json'   
    }})
    if (!response.ok) {
      console.log(response.status)
      throw new Error(response.status)
    }
    const data = await response.json()
      return data 
  }
  catch (error) {
    console.log(error.message)
  }
}

const deleteUrls = async (url_id) => {
  const response = await fetch(`http://localhost:3001/api/v1/urls/${url_id}`, {
    method: 'DELETE'
  })
  const newData = await response.json()
  return newData
}

export { getUrls, postUrls, deleteUrls }