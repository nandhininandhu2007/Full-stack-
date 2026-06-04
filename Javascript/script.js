var a = 10; //Reinitialize & Redeclare
// let b = 20; //Reinitialize
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
console.log(typeof underfine);
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


a = 1;
b = 1;
c = 0;

var result = a++ + --b + ++c - ++a + ++b + c++ + b++ + a;
console.log(result);+
