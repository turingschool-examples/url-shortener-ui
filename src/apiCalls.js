export const getUrls = () => {
  return (
    fetch('http://localhost:3001/api/v1/urls')
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(`HTTP Error! Status ${response.status}`)
        }
      })
  )
}

export const postUrl = (urlToPost) => {
  return fetch('http://localhost:3001/api/v1/urls', {
  method: 'POST',
  headers: {
    'Content-Type': "application/json"
  },
  body: JSON.stringify({
    long_url: urlToPost.urlToShorten,
    title: urlToPost.title
  })
})
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('Oops! Try again!')
    }
  })
}
