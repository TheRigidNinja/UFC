import React from 'react';
import ReactDOM from 'react-dom';
import App from './Main/ufc';
import './index.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
