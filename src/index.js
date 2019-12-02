import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MRoute from './routes/index';

ReactDOM.render(
<MRoute />,    
 document.getElementById('root')
 );
serviceWorker.unregister();
