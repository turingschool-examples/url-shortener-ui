export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
}

export const saveUrl = (value1, value2) => {
  return fetch('http://localhost:3001/api/v1/urls', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        long_url: value1,
        title: value2
      })
    }).then(response => response.json)
}
