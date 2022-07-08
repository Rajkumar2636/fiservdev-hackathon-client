import React from 'react';
import ReactDOM from 'react-dom/client';
import Transactions from './components/TerminalList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Transactions />
  </React.StrictMode>
);