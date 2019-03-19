import { connect } from 'react-redux';
import ArticleList from "../components/ArticleList";

function mapStateToProps(state) {
  return state.articles;
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
