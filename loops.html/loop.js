/*for(var i=0; i<=10; i++){
    console.log(i);
}



var i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}

var i = 0;
do {
    console.log(i);
    i++;
} while (i <= 10); */

/*for in loop
let car={
    name:"Toyato",
    brand:"new",
    year:2024
};

for(let key in car){
    console.log(`${key}:$(car[key]}`);
} */

/* for loop
let arr=[1,2,3];
var sum=0;
for(let value of arr){
    sum+= value
}
console.log(sum)*/


/*
function countProperties(obj){
    let count = 0;
    for(let key in obj){
        count++;
    }
    return count;
}
let reddy={
  name:"swami",
  age:34,
  isAdmin:true
};
console.log(countProperties(reddy));*/


/*function checkPrime(n){
    for(let i=0;i<=n;i++) {
        if(n%i==0);
        return false;
    }
}*/

/*let a=2+2;
switch(a)
{
    case 3:
        console.log('to small');
    case 4:
        console.log('exactly');
        case 5:
            console.log('to big');
        
}   */

/*function sumAll(...arr){
    let sum=0;
    for(let item of arr) sum+=item
    return sum;
}
console.log(sumAll(1));
console.log(sumAll(1,2));
console.log(sumAll(1,2,3));*/

/*function outerFunction(){
    let counter=0;
    function innerFunction(){
        counter++;
        return counter;
    }
    return innerFunction;
}
const innerFunctionCounter=outerFunction();
console.log(incrementCounter());*/


/*let person= {
eats:Abhi
};

let rabbit={
    jumps:true
};
rabbit.__proto__= person;

let thirdobj={}
thirdobj.__proto__=person;
console.log(person.eats);
console.log(rabbit.jumps); */

/*let person ={
    walk(){
        console.log("person walk")
    }
};
walk */


var person1 = {fisrtName:"abhi",lastName:"reddy"};
var person2 = {firstName:"smile",lastName:"reddy"};
 function invite(greeting1,greeting2){}

    invite.call(person1,"hi","good boy");
    invite.call(person2,"Bye","abhi");


 






