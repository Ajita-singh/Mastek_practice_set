//without funtions 
let a = 5;
let b = 10;
let c;
c = a + b;
console.log(c);//15
a = 8;
b = 3;
c = a + b;
console.log(c);//11
//with functions
let a = 5;
let b = 10;
function sum(a,b){
    let c = a + b ;
    console.log(c);
}
sum(a, b);
a = 9;
b = 20;
sum(a, b);//29
//functions is an object 
function myfn(a,b){
    let c;
    a = a + 1;
    c = a + b;
    return c;
}

/**
 * Example 1
 * 
 */
function myfn() {}
console.log(myfn);//myfn
myfn();
const functionResult = myfn();
console.log(functionResult);//undefine
console.log(myfn());//undefine
console.log(myfn(10,true));//undefine






