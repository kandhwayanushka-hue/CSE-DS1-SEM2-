const checkvote= async() => {
            const response = myPromise;
            console.log(response);
        }

        fetch("https://fakestoreapi.com/products")
        .then((products) => products.json())
        .then((data) => console.log(data))
        .catch((error)=> console.log(error));

        const getData = async() =>{
            const response =await fetch("https://fakestoreapi.com/products");
            console.log(response);
        }
        getData();  

        const getData = async() =>{
        try {    
            const response =await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log("fetch error");
        }
    }
        getData();
    
//  16/04/2026
/*//      with function keyword
function add(a, b){
    return (a+b);
}
console.log(add(23,19));

//      arrow function
const addFun = (c,d) => {
    return (c+d)
}
console.log(addFun(8,10));

//      anonymous function
(()=> console.log("Hey"))();

//      life function
(function greet(){
    CSSConditionRule.log("Hello");
})();

*/

//              MAP REDUCE FILTER
/*const num = [1,2,3,4,5,6,7,8,9,10];
num.forEach((n)=>console.log(n));

const num2 = num.filter((n)=>{return n*2});
console.log(num2);

const divisibleBy2 = num.filter(() => n%2 === 0);
console.log(divisibleBy2);

const sumOfNumArray = num.reduce((acc, val) => acc += val, 0);
console.log(sumOfNumArray)*/

//          SET TIME OUT
const greet = () => {
    console.log("Hello world!!!");
}
setTimeout(greet, 3000);

console.log("Before setTimeout");
const fun = setTimeout(() => {
    console.log("Heloo !!!");
},3000);
console.log("After setTimerout");
