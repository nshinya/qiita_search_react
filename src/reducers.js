import { combineReducers } from 'redux';
import { CHANGE_KEYWORD, CLEAR_KEYWORD, START_FETCH, SET_LIST } from './actions';

const initialState = {
  searchbox: {
    keyword: "",
  },
  articles: {
    isFetching: false,
    articleList: [],
  },
}

function searchReducer(state = initialState.searchbox, action) {
  switch (action.type) {
    case CHANGE_KEYWORD:
      return {
        ...state,
        keyword: action.payload.keyword,
      };
    case CLEAR_KEYWORD:
      return {
        ...state,
        keyword: "",
      };
    default:
      return state;
  }
}

function articlesReducer(state = initialState.articles, action) {
  switch (action.type) {
    case START_FETCH:
      return {
        ...state,
        isFetching: true,
      };
    case SET_LIST:
      return {
        ...state,
        isFetching: false,
        articleList: action.payload.articleList,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  searchbox: searchReducer,
  articles: articlesReducer,
});

export default rootReducer;
