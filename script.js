//datatypes in javascript
//primitive data types
let name="John"; //string
console.log(typeof name);
let age=30; //number
console.log(typeof age);
let isStudent=true;//boolean
console.log(typeof isStudent);
let nullValue=null; //null
console.log(typeof nullValue);
let car=nullValue;
console.log(typeof car);
let undefinedValue;//undefined
console.log(typeof undefinedValue);
let symbolValue=Symbol("id"); //symbol //node.scrpt.js(file name)
console.log(typeof symbolValue);
//non-primitive data types
let person={//key value pair
    name:"Alice",//object
    age:25,
    isStudent:false,
    email:"xyz@gmail.com",

};
console.log(typeof person);//user defined data type
let numbers=[1,2,3,4,5];
console.log(typeof numbers);
//operators in javascript
let a=10;
let b=5;
//arithmetic operators
console.log(a+b);//15
console.log(a-b);//5
console.log(a*b);//50
console.log(a/b);//2
console.log(a%b);//0
console.log(++a);//11
console.log(--a);//10
console.log(a++);//10
console.log(a--);//11
console.log(a);
//assignment operators
let d=20;
console.log(d+=3);//d=d+3
console.log(d-=5);//d=d-5
console.log(d*=2);//d=d*2
console.log(d/=4);//d=d/4
console.log(d%=3);//d=d%3
console.log(d);
let c=a;
c+=5; //c=c+5
console.log(c);
c-=3;
console.log(c);
c*=2;
console.log(c);
c/=4;
console.log(c);
c%=3;
console.log(c);
//comparison operators
let a=45;
let b="45";
console.log(a==b);//true because it checks only value of data not type of data
console.log(a===b);//false because it checks value and type of data 
console.log(a!=b);//false because it checks only value of data not type of data
console.log(a!==b);//true because it checks value and type of data
console.log(a>5);//true 
console.log(a<15);//false 
console.log(a>=10);
console.log(a<=10);
//logical operators
let x=true;
let y=false;
console.log(x && y);
console.log(x || y);
console.log(!x);
console.log(!y);
//concatenation of strings 
let g="anushka";
let h="kandhway";
console.log(a+b);//anushka kandhway
//ternary operators 
let age=10;
let status = (age>=18)?"adult":"minor";
console.log(status);
//loop and conditions
let temperature=25;
if(temperature>30){
    console.log("It's a hot day");
}
else if(temperature<15){
    console.log("It's a cold day");
}
else{
    console.log("It's a pleasant day");
}
let day=1;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");
}
//dome manipulation
document.getElementById("myButton").addEventListener("click", function(){
    document.getElementById("myParagraph").innerHTML="Button clicked!";
});