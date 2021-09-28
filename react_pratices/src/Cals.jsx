/**
//cals.jsx
function add(a,b){
 let sum = a + b;
 return sum;
}

function sub(a,b){
    let sub = a - b;
    return sub;
   }
function mult(a,b){
 let mult = a * b;
 return mult;
}

function div(a,b){
    let div = a + b;
    div = div.toFixed(2);
    return div;
   }
// export default add;
export {add, sub, mult, div};


//Create Simple Calculator App in React JS
//index,js
import React from 'react';
import ReactDOM from 'react-dom';
// import {add, sub, mult, div} from './Cals';
import App from "./App";

ReactDOM.render( <App />,
  document.getElementById("root")
);
//App.jsx
import React from "react";
import {add, sub, mult, div} from './Cals';

function App() {
    return (
        <>
        <ul>
          <li>sum of two no is{add(40,4)}</li>
          <li>sub of two no is{sub(20,4)}</li>
          <li>div of two no is{div(10,4)}</li>
          <li>Mult of two no is{mult(10,3)}</li>
        </ul>
        </>
    );
}
export default App;

 */











