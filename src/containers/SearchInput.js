import { connect } from 'react-redux';
import { changeKeyword, clearKeyword, startFetch, setList } from '../actions';
import SearchInput from "../components/SearchInput";

function mapStateToProps(state) {
  return state.searchbox;
}

function mapDispatchToProps(dispatch) {
  return {
    changeKeyword(keyword) {
      dispatch(changeKeyword(keyword));
    },
    clearKeyword() {
      dispatch(clearKeyword());
    },
    startFetch() {
      dispatch(startFetch());
    },
    setList(articleList) {
      dispatch(setList(articleList));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
