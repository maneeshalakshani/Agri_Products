import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './styles/Home.css'
import './styles/Products.css'
import './styles/Utils.css'
import './styles/Login.css'
import './styles/Cart.css'
import './styles/History.css'
import './styles/Categories.css'
import Header from './components/Home/Header'
import MainPages from './components/MainPages/Pages'


function App() {
  return (
    <DataProvider>
      <Router>
        <div>
          <Header />
          <MainPages />
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
