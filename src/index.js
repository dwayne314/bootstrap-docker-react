import React from 'react';
import { render } from 'react-dom';
import { App } from './components';
import './index.css';

// istanbul ignore next
render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
