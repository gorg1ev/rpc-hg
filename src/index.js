import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './assets/scss/_typography.scss';
import './assets/scss/_global.scss';

import AppContext from './context/app-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <AppContext>
      <App />
   </AppContext>
);
