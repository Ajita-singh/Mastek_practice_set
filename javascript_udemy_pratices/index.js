/**
 * Example-1: variable declaration
 */
var a;
console.log(a);
console.log(b);//Uncaught ReferenceError: b is not defined

let c;
console.log(c);
const d; //Missing initializer in const declaration
/**
 * Example-2: let
 */

let number = 10;
console.log(number);
//declaration
let mystr;
console.log(mystr);
//assignment
mystr = "heelo from str";
console.log(mystr);
//re-assignment
mystr = "new value for mystr";
console.log(mystr);

/**
 * Example-3: var
 */

 var number = 10;
 console.log(number);
 //declaration
 var mystr;
 console.log(mystr);
 //assignment
 mystr = "heelo from str";
 console.log(mystr);
 //re-assignment
 mystr = "new value for my str";
 console.log(mystr);


/**
 * Example-3: const
 */
 const myboolean = true;
 console.log(myboolean);
 //assignment
 myboolean = false;
 console.log(myboolean);//assignment to constantvariable
 
 const myboolean = false; //not declear same value

 /**
  * challenge-1
  * declare variable "myobject" and assign value{}.
  * print the variable to the console
  * note: variable "myobject" will not be reassigned in future
  */
const myObject = {};
console.log(myObject);

/**
  * challenge-1
  * declare "x" and assign value 10 to it.
  * declare "y" and assign value true to it
  * declare "myobject" and assign object with 
  * two name-value pairs
  * declare "anotherobject" later assign value to it
  * object with three name-value pairs
    */
   let x = 10;
   const y = true;
   const myObjects = {
     a:x,
     b:y
   };
   console.log(myObjects);

   //

   x = 20;
   let anotherobject;
   anotherobject = {
     newA:x,
     b:y,
     c:myObjects
   };
   console.log(anotherobject);

//dynamic type language
function a(){
  console.log('hey there');
}
a();//output-hey there
a = 10;
a();//uncaught typeError: a is not a funtions-error


//
let myVariable;
console.log(myVariable);//out-put:undefine
myVariable = 10;
console.log(myVariable);//10
myVariable = true;
console.log(myVariable);//true
myVariable = {
  x: true,
  y: 10
};
console.log(myVariable);//{x:true,y:10}
myVariable.y = 20;
console.log(myVariable);//{x:true,y:20}
myVariable = null;
myVariable.x=false;//uncaught 
//type error:cannot set property 'x' of null S

//challenge
let Ajita;
console.log(Ajita);
AJita = 15;
console.log(Ajita);
Ajita = false;
console.log(Ajita);



