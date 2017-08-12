import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, HashRouter  } from 'react-router-dom';
import App from './components/App.jsx';
import Home from './components/Home.jsx';
import List from './components/List.jsx';


import 'babel-polyfill';
import routes from './router.js';
let root = document.querySelector('body');
let leaf = document.createElement('div');
root.appendChild(leaf);
//HashRouter有一个问题是连续多次点击同一个链接，会提示不能push相同的hash到history中,url中有#
//BrowserRouter的问题是兼容性，因为其是以h5为基础的,url中无#
render(
    (<BrowserRouter>
        {routes}
    </BrowserRouter>
    ), leaf
)