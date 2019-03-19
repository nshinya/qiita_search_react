import React, { Component } from 'react';
import SearchInput from '../containers/SearchInput';
import ArticleList from '../containers/ArticleList';

export default class QiitaApp extends Component {
  render() {
    return (
      <div>
        <SearchInput />
        <ArticleList />
      </div>
    );
  }
}
