import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import App from './App';
import store from './store/store'; // Import the Redux store
import './index.css'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap App in Provider and pass the store */}
      <h2 className='text-center p-8 m-8 font-serif font-bold text-4xl '> Here are the jockes you will laught on!! </h2>
      <App />
    </Provider>
  </React.StrictMode>
);
