"use strict"

function testVar(){
    var a=30;
    if(true){
        var a = 50;
        console.log(a);
    }
    console.log(a);
}

function testLet(){
    let a = 30;
    if(true){
        let a = 50;
        console.log(a);
    }
    console.log(a);
}
testVar();
testLet();

/*
for(var i=0;i<10;i++){
    console.log(i);
}
 console.log(i);
 
for(let i=0;i<10;i++){
    console.log(i);
}
console.log(i);
*/

/*if var is declared then it will be act like global variable but when let is declared then he will not accessable to outside the function.*/
