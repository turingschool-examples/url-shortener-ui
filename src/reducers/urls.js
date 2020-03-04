export const urls = (state = [], action) => {
  switch (action.type) {
    case 'SET_URLS':
      return action.urls;
    default:
      return state;
  }
};
