import React from 'react';
import ReactDOM from 'react-dom';

const list = "hello this is jsx";
const pera = "hello this is jamsed! i am doing my job";
const date = new Date();
const dname = date.getDate();
const mname = date.getMonth();
const yname = date.getFullYear();
//this is javascript code in this section
ReactDOM.render(
  <div>
    <h1>{list}</h1>
    <h3> {pera}</h3>
    <h3>{dname +" "+ mname +" "+ yname}</h3>
  </div>,
  document.getElementById('root')
);
//this is html code in jsx
ReactDOM.render(
  <div>
    <h1>Jamsed hossen</h1>
    <p> i would love to doing my code</p>
  </div>,
  document.getElementById('rooot')
);
