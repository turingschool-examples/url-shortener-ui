export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => { 
        if (response.status === 404) {
          throw new Error("Oops! We couldn't find those urls.")
        }

        if (!response.ok) {
          throw new Error('Oops! Something went wrong.')
        }
        return response.json()})
}

export const postUrl = (url) => {
  return fetch('http://localhost:3001/api/v1/urls', {
    method: 'POST',
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify(url)
    
  })
  .then(response => {

    if(response.status === 422 || response.status === 404) {
      throw new Error('Invalid entry')
    }

    if(!response.ok) {
      throw new Error('Oops! Something went wrong.')
    }
    return response.json()})
}
