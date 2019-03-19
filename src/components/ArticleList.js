import React from 'react';

export default function ArticleList(props) {
  const { isFetching, articleList } = props;

  return (
    isFetching ?
      <div>Now loading...</div>
      :
      <ul>
        {
          articleList.map((value, index) => {
            return (
              <li key={index}>
                <a href={value.url}>{value.title}</a>
              </li>
            )
          })
        }
      </ul>
  );
}
