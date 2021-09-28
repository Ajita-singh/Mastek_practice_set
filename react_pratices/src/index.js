// var React = require('react');
//import React from 'react';
// var ReactDOM = require('react-dom');
//import ReactDOM from 'react-dom';

//jsx way to render data
  /*
  ReactDOM.render(<h1>hello world</h1>,
  document.getElementById('root'));
  */
//how to render multiple elements inside reactdom.render()
 /* const arr = ['a','b','c']
  ReactDOM.render(
  <h1>hello world</h1>,
  <p>plzz like</p>,
  document.getElementById('root'));*/
//using fragment
/*ReactDOM.render(
<React.Fragment>
<h1>hello world</h1>
<p>plzz like</p>
<h2>hello world</h2>
</React.Fragment>,
document.getElementById('root')); */
//using bibel to render data
  // ReactDOM.render( /*#__PURE__*/React.createElement("h1", null, "hello world"), 
  // document.getElementById('root')); //babel compiler

//pure javascript to render data  
/*var h1 = document.createElement('h1');
h1.innerHTML = "hello ajita";
document.getElementById("root").appendChild(h1);*/

//using fragment
//challenge #1 create simple web app and list of 5 netflix webseries
/*
ReactDOM.render(
<>
<h1>Ajita Technical netflix oick</h1>
<h2>List of 5 Best Series</h2>
<ol>
  <li>Dark</li>
  <li>Extra Curricular</li>
  <li>My Holo Love</li>
  <li>Mr Robot</li>
</ol>
</>,
document.getElementById('root'));
*/

//javascript expression in jsx in React {}
/*
import React from 'react';
import ReactDOM from 'react-dom';
const fname = 'ajita'
ReactDOM.render(
  <>
  <h1>my name is {fname}</h1>
  <p>my name is {5*6}</p>
  <p>my name is {Math.random()}</p>
  </>,
  document.getElementById("root"));
*/
/*
//ES6 template literal in jsx
import React from 'react';
import ReactDOM from 'react-dom';
const fname = "ajita";
const lname = "singh";
// ``
// console.log(`my name is ${fname}`) //template literal
ReactDOM.render(
  <>
  <h1>{`my name is ${fname}my last name is ${lname}`}</h1>
  //{ <h1>my name is {fname + " " + lname}</h1>}
  <h1>my lucky number is {5 + 5} </h1>
  </>,
  document.getElementById("root")
);
 */
//challenge-2 display current date and time 
/*
import React from 'react';
import ReactDOM from 'react-dom';
const name = "ajita";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
ReactDOM.render(
  <>
  <h1>Hello, My Name is {name}</h1>
  <p>today Date is {currDate} </p>
  <p>current Time is{currTime} </p>
  </>,
  document.getElementById("root")
  );
  */

  //JSX Attributes in ReactJS in 
  /*
  import React from 'react';
  import ReactDOM from 'react-dom';
  const Name = "Ajita";
  const img1 = "https://picsum.photos/id/237/200/300"
  const img2 = "https://picsum.photos/seed/picsum/200/300"
  const img3 = "https://picsum.photos/200/300?grayscale"
  const links = "https://picsum.photos/"
  ReactDOM.render(
    <>
    <h1 contentEditable="true">my name is {Name}</h1>
    <img src={img1} alt="randomimage" />
    <img src={img2} alt="randomimage" />
    <a href={links} target="_google">
    <img src={img3} alt="randomimage" />
    </a>
    </>,
    document.getElementById('root')
  );
*/
  
//CSS Styling & Importing CSS Files in React JS
/** 
import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
const Name = "Ajita";
const img1 = "https://picsum.photos/id/237/200/300"
const img2 = "https://picsum.photos/seed/picsum/200/300"
const img3 = "https://picsum.photos/200/300?grayscale"
const links = "https://picsum.photos/"
ReactDOM.render(
  <>
  <h1 className="heading">my name is {Name}</h1>
  <div className="imag_div">
  <img src={img1} alt="randomimage" />
  <img src={img2} alt="randomimage" />
  <a href={links} target="_google">
  <img src={img3} alt="randomimage" />
  </a>
  </div>
  </>,
  document.getElementById('root')
);
*/
//Internal CSS & Inline CSS Styling In React JS 
/*
import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
const Name = "Ajita";
const img1 = "https://picsum.photos/id/237/200/300"
const img2 = "https://picsum.photos/seed/picsum/200/300"
const img3 = "https://picsum.photos/200/300?grayscale"
const links = "https://picsum.photos/"

const heading = {
 color : 'blueviolet',
 textTransform : 'capitalize',
 textAlign : "center",
 fontWeight: 'bold',
 textShadow: '0px 2px 4px burlywood',
 margin: '50px 0',
 fontFamily: 'Josefin Sans sans-serif'
}

ReactDOM.render(
  <>
  <h1 style={heading}>my name is {Name}</h1>
  <div className="imag_div">
  <img src={img1} alt="randomimage" />
  <img src={img2} alt="randomimage" />
  <a href={links} target="_google">
  <img src={img3} alt="randomimage" />
  </a>
  </div>
  </>,
  document.getElementById('root')
);
*/
//React Components | Functional Component in React JS 
/* 
import React from "react";
 import ReactDOM from "react-dom";
 import App from "./App";
 ReactDOM.render(
   <App />,
   document.getElementById("root"));
 */

   //ES6 Modules Import Export in React JS
/*
import React from "react";
import ReactDOM from "react-dom";
import youtuber,{favsong,myName,myNames}from './App';
//import * as ques from './App';
ReactDOM.render(
<>
<ol>
  <li>Ajita</li>
  <li>{youtuber}</li>
  <li>{favsong}</li>
  <li>{myName()}</li>
  <li>{myNames()}</li>
</ol>
</>,document.getElementById('root'));
*/
//Props in React Js in Hindi | React JS






























































