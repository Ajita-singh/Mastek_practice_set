const myCity = {
    city:"new york",
    popular:true,
    country:"usa"
};
//access object value
console.log(myCity.city),
console.log(myCity.popular);
/**modify properties of object */

const Mycity = {
    city:"new york"
};
Mycity.city="patna";
console.log(Mycity);

// remove properties of the object
delete Mycity.city;
console.log(Mycity);
//add properties in object /access properties using bracket notation

const myCity={
    city:"new york"
};
myCity["popular"]=true;
console.log(myCity);

const countrypropertyname = 'country';
myCity[countrypropertyname]='usa';
console.log(myCity);
//accessing nested properties

const myCity={
    city:"new york",
    info:{
        popular:true,
        country:"usa"
    }
};
console.log(myCity.info.popular);
delete myCity.info["popular"];


/**
 * Example 1: create object and modify its properties
 */
let myObject;
myObject={
    a:10,
    b:"abc"
};
console.log(myObject);
myObject.a=15;
console.log(myObject);
myObject.c=true;
console.log(myObject);
delete myObject.b;
console.log(myObject);
console.log(myObject.a);


/**
 * CHALLENGE 1
 * create variable called "mypost"
 * initial value should be{}
 * add property called "postTitle" and
  value "object" is refrence type"
  *add one more property"shared" and set
  its value to "false"
  *increase value of the "postlikes" by 1
  *delete property "shared"
 */

let myPost={};
myPost.postTitle="object is refrence type";
myPost.postLikes=0;
myPost.shared=false;
console.log(myPost);
myPost.postLikes=myPost.postLikes + 1
console.log(myPost);
delete myPost.shared;
console.log(myPost);

/**
 * Example-2
 * use"const" for object declaration
 */
const myobject = {};
myobject.a = true;// no error
console.log(myobject);
myobject={
    a:true //uncaught typeerror:assignment to constant variable
};
/**
 * CHALLENGE 2
 * create variable "myobject" and add property "a" -10.
 * "copyofmyobject" and its value should be myobject
 * add new property "b" with value false to the "copyofmyobject"
 * print to the console "myobject" and"copymyobject" and
  interpret result 
 */
let myObject={a : 10,};
let copyofmyobject = myobject;
copyofmyobject.b=false;
console.log(myobject);
console.log(copyofmyobject);

/**
 * Example:3
 * bracket notations
 */
let myObject = {
    a:true,
    b:null,
    c:20

}
console.log(myobject["a"]);//true
console.log(myobject[a]);//error
const propertyname = "c";
console.log(myobject[propertyname]);//20
console.log(myobject["propertyname"]);//undefine
myobject["new" + "property" + "name"] = "value of dynamically properties name";
console.log(myobject);

/**
 * Example: 4
 * missing properties
 */
const myObject={
    a:3,
    b:true
};
console.log(myobject.c);//undefine
console.log(myobject.absentproperty);//undefine
console.log(nondeclaredvariable);//is not define
/**
 * object -method properties with funtion as a property value
 */
const myCity = {
    city:"new york",
    cityGreeting: function(){
        console.log("greeting!!")
    }
};
myCity.cityGreeting();//greeting


















