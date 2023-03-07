export const getUrls = async () => {
  return await fetch("http://localhost:3001/api/v1/urls");
};


export const postNewUrl = (newUrl) => {
  const postUrl = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      long_url: newUrl.urlToShorten,
      title: newUrl.title,
    }),
  };
  return fetch("http://localhost:3001/api/v1/urls", postUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to Fetch");
      }
      return response.json();
    })
};

export const deleteUrl = (urlId) => {
  const deleteUrl = {
    method: "DELETE",
  };
  return fetch(`http://localhost:3001/api/v1/urls/${urlId}`, deleteUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to delete URL");
      }
      return null;
    });
};