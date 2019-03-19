export const CHANGE_KEYWORD = "CHANGE_KEYWORD";
export const CLEAR_KEYWORD = "CLEAR_KEYWORD";
export const START_FETCH = "START_FETCH";
export const SET_LIST = "SET_LIST";

export const changeKeyword = keyword => ({
  type: CHANGE_KEYWORD,
  payload: {
    keyword: keyword,
  },
});

export const clearKeyword = () => ({
  type: CLEAR_KEYWORD,
  payload: {},
});

export const startFetch = () => ({
  type: START_FETCH,
  payload: {},
});

export const setList = (articleList) => ({
  type: SET_LIST,
  payload: {
    articleList: articleList,
  },
});
