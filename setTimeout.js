//we want to executre the greet function after 3 seconds
const greet=()=>{
console.log("Hello CSE_DS");
}
setTimeout(greet,3000);
console.log("before setTimeout");
const fun =setTimeout(()=>{
    console.log("This is an arrow function inside setTimeout");
},2000);
console.log("after setTimeout");
//clearing the timeout before it executes
clearTimeout(fun);

