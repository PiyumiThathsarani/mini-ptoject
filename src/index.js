import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Component/Login';
import Profile from './Component/Profile';









ReactDOM.render(
<<<<<<< HEAD
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>,
  

=======
  <React.StrictMode>
    <App />
    
  </React.StrictMode>,
  
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f40dc32915c43325b2da16e75259bc0b26ef03c2
=======
>>>>>>> f40dc32915c43325b2da16e75259bc0b26ef03c2
=======
>>>>>>> f40dc32915c43325b2da16e75259bc0b26ef03c2
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
