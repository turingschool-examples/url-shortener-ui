// export const getUrls = () => {
//   return fetch('http://localhost:3001/api/v1/urls')
//       .then(response => response.json())
// }

const getUrls = () => {
  return (
    fetch('http://localhost:3001/api/v1/urls')
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        throw new Error(`HTTP Error! Status ${response.status}`)
      }
    })
  )
}
export { getUrls }
