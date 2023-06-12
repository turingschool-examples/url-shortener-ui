export const getUrls = async () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
      .then(data => {
        return data.urls;
      })
      .catch(error => {
        console.log("There was an error:", error);
      })
}


