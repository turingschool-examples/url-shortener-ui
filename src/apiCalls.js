export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
    .then(response => response)
    .catch(error => error)
};