import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import registerServiceWorker from './registerServiceWorker';

const data = JSON.parse(document.getElementById('swearing').innerHTML)
ReactDOM.render(<App {...data} />, document.getElementById('root'));
registerServiceWorker();
