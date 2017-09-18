import React from 'react';
import { render } from 'react-dom';
import  { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/app.jsx';
import TodoApp from './reduces/index.js';

const store = createStore(TodoApp);       // 里面传三个参数，第一个是reduces，第二个默认值，第三个是中间件等等

render (
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
)






