import React from 'react';
import App from './components/App.jsx';
import Home from './components/Home.jsx';
import List from './components/List.jsx';
import { Link, Route } from 'react-router-dom';
import '../css/index.css';

export default (
     <div>
        <ul className="chooseAbled">
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/list" >List</Link></li>
        </ul>
        <div className="contentContainer">
            <Route exact path="/" component={Home}></Route>
            <Route path="/list" component={List}></Route>
        </div>
    </div>
)

