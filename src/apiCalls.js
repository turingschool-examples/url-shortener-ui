const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          throw new Error('Failed to fetch the urls :-(')
        }
      })
      .then( response =>  response.json()) 
}

 const postUrl = (newUrl) => {
  return fetch('http://localhost:3001/api/v1/urls', {
    method: 'POST', 
    headers: {
      'Content-type': 'application/json'
    }, 
    body: JSON.stringify(newUrl)
  })
  .then(response => {
    if(response.ok) {
      console.log('response', response)
      return response;
    } else {
      throw new Error('Something happened while we added that new url using POST')
    }
  })
  .then(response => response.json())
}

export {getUrls, postUrl}