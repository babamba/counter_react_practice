import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
// Redux 관련 불러오기

import { createStore } from 'redux'

// 구독(subscribe)중인 함수들 (reducer)이 상태가 업데이트 될 때 마다 다시 실행되게 해주죠.
import reducers from './modules'

import { Provider } from 'react-redux';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
     // 연동 할 컴포넌트를 감싸준다
     // Provider 컴포넌트의 props로 store 값을 설정
     <Provider store = {store}>
          <App />
     </Provider>
  ,document.getElementById('root')
);
