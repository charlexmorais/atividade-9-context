import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';
import ProfileProvider from './components/context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProfileProvider>
    <App />
  </ProfileProvider>
);
