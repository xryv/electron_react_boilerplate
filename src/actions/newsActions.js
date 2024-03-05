// src/actions/newsActions.js
export const fetchNewsSuccess = (news) => ({
    type: 'FETCH_NEWS_SUCCESS',
    payload: news,
  });
  
  // src/reducers/newsReducer.js
  const newsReducer = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_NEWS_SUCCESS':
        return action.payload;
      default:
        return state;
    }
  };
  