var a = 10; // Reinitialize & Redeclare
var b = 20; // Reinitialize
const c = 30;

console.log(a);
console.log(b);
console.log(c);

var num = 10;
var str = "Nandhini";
var undefining;
var Null = null;
var boolean = true;

console.log(typeof num);
console.log(typeof str);
console.log(typeof undefining);
console.log(typeof Null);
console.log(typeof boolean);


var bigInt = 123n;
var symbol = Symbol('li');

console.log(typeof bigInt);
console.log(typeof symbol);


var arr = [10,20,30,40];
console.log(typeof arr, arr);
var obj = {
    name:"nandhini",
    dept:["CT"]
}
console.log(typeof obj,obj)

// Arithmetic operator (+,-,*,%,/)
var a = 10;
var b = "naini";

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a % b);
console.log(a / b);

// Logical operator (&&,||,!)
var a = true;
var b = false;

console.log(a && b);
console.log(a || b);
console.log(!a);

//Relational operator (>,<,>=,<=,==,!=)
a = 10;
b = "10";
console.log(a<b);
console.log(a<b);

console.log(a<b);
console.log(a>b);
console.log(a<=b);
console.log(a>=b);
console.log(a==b);
console.log(a!=b);

a = 10;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
b = 20;
a += b; //30
console.log(a);
a -= b;
console.log(a);

var a = 10;

console.log(a++);
console.log(++a);

var a = 10;

console.log(a--);
console.log(--a);

if(true){
    console.log("If Conditional Statement")
}

// conditional statements
var a = 10;
var b = 20;
// if condition
if(true){
       // Template Literals
       console.log(`${a} + ${b} = ${a + b}`)
}

// if(true){
//      a = 10;
//      console.log(a);
// }



var a = 10;
let d = 20;
if(true){
    console.log(a);
    let b = 30;
    console.log(d);
}
console.log(a);
console.log(d);

var x = 10; //Global scope
// let y = 20; //Block scope
const y = 20; //Block scope
if(true){
    console.log(x);
    //let y = 30 //Block scope
    const z = 30; //Block scope
    console.log(y);
// }
// console.log(x);
// console.log(y);
}

var mark = 85;
if(mark>=90){
    console.log("0 Grade");
}
else if(mark>=70){
    console.log("A Grade");
}
else if(mark>=35){
    console.log("Pass");
}
else{
    console.log("Fail")
}

var a = 10;
// condition ? true statement: false statement
var result =  a%2===0 ? "Even" : "Odd";
console.log(result)

mark = 90;
var result = (mark>=90) ? "0 Grade" :
            (mark>=70) ? "A Grade" :
            (mark>=35) ? "Pass" :
            "Fail" ;
 console.log(result);

 var day = 2;
 switch(day){
    case 1:{
        console.log("Sunday");
        break;
    }
    case 2:{
        console.log("Monday");
        break;
    }
    case 3:{
        console.log("Tuesday");
        break;
    }
    case 4:{
        console.log("Wednesday");
        break;
    }
    case 5:{
        console.log("Thursaday");
        break;
    }
    case 6:{
        console.log("Friday");
        break;
    }
    case 7:{
        console.log("Saturday");
        break;
    }
    default:{
        console.log("Invalid Input");
    }
 }


 // Looping Statement

// 1 time 11 times 10 times

for(var i=1;i<=10;i++){
    console.log(i);
}

var val = 10246;
var count = 0;
while(val > 0){
    count++;
    val = Math.floor(val/10);
}
console.log(count);

// }while(false);

for(let i=1;i<=10;i++) {
    if(i%2===0){
        continue;
    }
    console.log(i);
}

add(); //Hoisting

function add(){
    console.log(10+20);
}

function add(a=5, b=6){
    console.log(a+b);
}

add(); //Hoisting

//Arrow Function
var demo = () => {
    console.log(10+20);
}
demo();

//Arrow Function
var demo = (a = 5, b = 6) => {
    console.log(a + b);
}
demo(10,20);
demo();
demo(10);

//Spread Operator(....)

var arr = [10,20,30];
var arr2 = [40,50];
console.log(arr);
console.log(arr2);
var arr3 = [...arr, ...arr2];
console.log(arr3);


//Destructuring Operator
 
var [m1,m2,m3,m4,m5] =[95,96,98,99,88]
console.log(m1,m2,m3,m4,m5);

var {name,dept,mobile,email,isactive} = {
    name:"Nandhini",
    dept:["CT"],
    mobile:9587412360,
    email:"nandhininandhu2007@gmail.com",
    isactive:true
}
    
console.log(name,dept,mobile,email,isactive)

var arr = [10,20,30,40,50];

for(let index in arr) {
    console.log(index)
}
//for..of
for(let value of arr){
    console.log(value)
}

var obj = {
    name:"Nandhini",
    dept:["CT"],
    mobile:9587412360
}

for(let key in obj) {
    console.log(key,obj[key])
}


var arr = [1,2,3,4,,5];

var result = arr.map((va1)=>(va1*2));
console.log(result)

var even = arr.filter((va1)=>va1%2===0);
console.log(even)

var sum = arr.reduce((add,va1)=>(add+va1),0);
console.log(sum)

