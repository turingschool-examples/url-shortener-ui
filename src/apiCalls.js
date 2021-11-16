export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
}

export const sendUrl = (request) => {
  return fetch('http://localhost:3001/api/v1/urls', {
    method: "post",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request)
  })
  .then(response => {
    checkResponse(response)
    return response.json()
  })
  .catch(error => {
    return error.message
  })
}

function checkResponse(response) {
  if (!response.ok) {
    throw new Error('Oopsie Daisy, the server\'s getting lazy!')
  }
}
