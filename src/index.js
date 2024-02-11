import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Error from "./pages/error";
import Products from "./pages/Products";
import Selection from "./pages/selection";


import Home from "./pages/home";
import About from "./pages/about";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
  <Routes>
    <Route path="/home" element={<Home />} />

    <Route path="/" element={<App />} />
    <Route path="/products" element={<Products />} />
     <Route path='*' element={<Error />}/>
     <Route path="/about" element={<About />} />
     <Route path="/selection" element={<Selection />} />
     
     </Routes>
 </Router>
  </React.StrictMode>
);



