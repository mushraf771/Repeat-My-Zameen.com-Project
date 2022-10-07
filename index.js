import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.baseURL = "http://127.0.0.1:8000/api/";
axios.defaults.headers.common["Authorization"] = 'AUTH_TOKEN';
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
// const {store, persistor} = createStore(); // destructed the result to get the store & persistor
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);