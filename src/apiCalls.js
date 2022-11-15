const getUrls = async () => {
  const response = await fetch('http://localhost:3001/api/v1/urls')

  const data = await response.json()
  return data
}

const postNewUrl = async (newUrl) => {
  const response = await fetch('http://localhost:3001/api/v1/urls', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(newUrl)
  })

  const data = await response.json()
  return data
}

export { getUrls, postNewUrl }