export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => {
        if (!response.ok) {
          throw new Error (`Request failed - ${response.status}`)
        }
        return response.json()
      })
}

export const postUrls = url => {
  return fetch('http://localhost:3001/api/v1/urls', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(url)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error (`Post failed - ${response.status}`)
      }
      return response.json()
    })
}

export const deleteUrl = id => {
  return fetch(`http://localhost:3001/api/v1/urls/${id}`, {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'}
  })
  .then(response => {
    if (!response.ok) {
      throw new Error (`Post failed - ${response.status}`)
    }
    return response.json()
  })
}