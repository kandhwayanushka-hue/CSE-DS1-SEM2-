const getData=async ()=>{
    try{
        const response=await fetch('Fakestoreapi.com/products');
        const data=await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
getData();
//with function keyword
function add(a,b){
    return a+b;
}
//arrow function
const addFun=(a,b)=>{
    return a+b;
}
console.log(add(2,3));
console.log(addFun(2,3));
(()=>console.log('IIFE function'))();
(function greet(){
    console.log('Hello, World!');
})();
//anonymous function
const addAnonymous=function(a,b){
    return a+b;
}
console.log(addAnonymous(2,3));
