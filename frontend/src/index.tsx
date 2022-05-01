import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import App from './App';
import { UnitContextProvider } from './Context/PostContext';

/* Sentry.init({
  dsn: 'https://8be8c28e3e4c4c79a03156f5dec9f11e@o1224845.ingest.sentry.io/6370046',
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
}); */

ReactDOM.render(
  <UnitContextProvider>
    <App />
  </UnitContextProvider>,
  document.getElementById('root'),
);
