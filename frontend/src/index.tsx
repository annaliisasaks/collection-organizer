import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UnitContextProvider } from './Context/PostContext';

ReactDOM.render(
  <UnitContextProvider>
    <App />
  </UnitContextProvider>,
  document.getElementById('root'),
);
