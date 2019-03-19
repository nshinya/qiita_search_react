import React from 'react';
import axios from 'axios';

export default function SearchInput(props) {
  function handleClick() {
    const keyword = props.keyword;
    props.startFetch();
    props.clearKeyword();

    axios.get('https://qiita.com/api/v2/items', {
      params: {
        query: keyword,
      }
    }
    ).then(response => {
      console.log(response.data);
      props.setList(response.data);
    })
  }

  return (
    <div>
      <input type="text" value={props.keyword} onChange={(e) => props.changeKeyword(e.target.value)} />
      <button onClick={() => handleClick()}>search</button>
    </div>
  )
}
