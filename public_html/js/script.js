/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function(){
   ask(); 
});

function ask(){
    var number = prompt("How high should I count?", "50");
    if (isInt(+number)) {
       fizzbuzz(+number);
   }
   else {
       if (confirm('Please enter and integer. Would you like to try again?')) {
           ask();
        }
   }
}

function fizzbuzz(top){
   var output = 1;
   var end = top;
   while(output <=end){
       if (output%3 ===0 && output%5===0){
           $('body pre').append("FizzBuzz\n");
       }
       else if (output%3 === 0){
           $('body pre').append("fizz\n");
       }
       else if(output%5 === 0) {
           $('body pre').append("buzz\n");
       }
       else {
           $('body pre').append(output+"\n");
       };
       
       output+=1;
   }
};

function isInt(n){
    return n % 1 === 0;
}