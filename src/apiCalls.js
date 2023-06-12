export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => {
        if (!response.ok) {
          throw new Error(response.message)
        } else {
          return response.json()
        }
      })
}

export const postUrl = (url) => {
  return fetch('http://localhost:3001/api/v1/urls', {
    method: 'POST',
    body: JSON.stringify(url),
    headers: {
      "Content-type": "application/json"
    }
  })
  .then(res => res.json())
}