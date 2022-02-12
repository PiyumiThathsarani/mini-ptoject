import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginBackground from './Component/Pages/LoginBackground';
import Navbar from './Component/Profile/Navbar';
import Register from './Component/Pages/Register';
import Application from './Component/Pages/Application';


ReactDOM.render(

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/LoginBackground" element={<LoginBackground/>} />
        <Route path="/Navbar" element={<Navbar/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Application" element={<Application/>} />

        <Route path="*" element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
        }
        />
      </Routes>
    </BrowserRouter>,
    
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
