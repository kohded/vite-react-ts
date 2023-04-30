import { enableMapSet, enablePatches } from 'immer';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/scss/index.scss';
import { App } from './components/App/App';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { report } from './metrics/web-vitals';

// https://immerjs.github.io/immer/installation/#pick-your-immer-version
enableMapSet();
enablePatches();
// If you want to start measuring performance in your app, pass a function to log results (for
// example, webVitals(console.log)) or send to an analytics endpoint.
// Learn more: https://github.com/GoogleChrome/web-vitals
report();

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
