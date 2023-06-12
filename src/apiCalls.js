export const getUrls = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/urls');

    if (response.status >= 400 && response.status <= 599) {
      throw new Error('Network response was not OK');
    }

    return response;
  } catch (error) {
    throw error;
  }
};