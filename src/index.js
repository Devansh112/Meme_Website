import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { fetchMeme } from './redux/slice/meme.js';

// const isDataLoaded = store.getState().memeData;

const root = ReactDOM.createRoot(document.getElementById('root'));
let persistor = persistStore(store);

const isDataLoaded = store.getState().memeData.memeData;
if (isDataLoaded) {
  store.dispatch(fetchMeme());
}

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
