import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'


import './index.css';
import { store } from "./redux/storeConfig/store"
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
axios.defaults.baseURL = 'http://localhost:3000/v1';

ReactDOM.render(
  <React.StrictMode>

<Provider store={store}>
      <Suspense fallback={ <p>...loading</p>}>
        <div className="app-container">
        <ReactNotification />
        <App />
        </div>
        
      </Suspense>
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
