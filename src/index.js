import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const root = document.getElementById('root');
const rootElement = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Utilizarea createRoot în React 18
if (root) {
  ReactDOM.createRoot(root).render(rootElement);
} else {
  throw new Error("Couldn't find root element");
}
