import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes';
import reducer from './store/reducer';
//import reducer from './components/Counters/reducer';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><Routes /></Provider>, document.getElementById('root'));

