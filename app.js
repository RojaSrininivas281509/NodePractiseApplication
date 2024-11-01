
require('./xyz.js');
const {xy, calculateSum,multiply} =require("./calculate.js")
const data= require('./data.json');
var name ="Namaste Node Js";
var a=10;
var b=20;
calculateSum(a,b)
multiply(a,b)
console.log(name)
console.log(a+b);
console.log(JSON.stringify(data));
console.log(xy);
// console.log(globalThis);//its global like window ,this,self,frames it will ued for all runtimes