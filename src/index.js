import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ResistanceApp from './ResistanceApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ResistanceApp />, document.getElementById('resistanceRoot'));
registerServiceWorker();
