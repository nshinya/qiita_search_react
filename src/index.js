import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import QiitaApp from './components/QiitaApp';

const store = createStore(rootReducer);

render(
  (
    <Provider store={store} >
      <QiitaApp />
    </Provider>
  ),
  document.getElementById("root")
);
