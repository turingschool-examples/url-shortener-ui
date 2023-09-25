export const getUrls = () => {
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

export const postURl = () => {
  return
}