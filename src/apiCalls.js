export const getUrls = () => {
  try {
    return fetch('http://localhost:3001/api/v1/urls')
        .then(response => response.json())
  } catch (error) {
    console.log(error)
  }
}

export const postUrls = (title, urlToShorten) => {
  return fetch('http://localhost:3001/api/v1/urls', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      long_url: urlToShorten,
      title: title,
    })
  })
    .then(response => {
      if (response.ok) {
        return response.json()
      }
  })
 }