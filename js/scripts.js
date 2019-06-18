var kidogo=document.getElementById('kadogo');
var kubwa=document.getElementById('kubwa');
var kubwakabisa=document.getElementById('kubwakabisa');
var pickle=document.getElementById('pickle');
var kale=document.getElementById('kale');
var vegan=document.getElementById('vegan');
var bbq=document.getElementById('bbq');
var chicken=document.getElementById('chicken');
var kadogo=document.getElementById('honey');
var crispy=document.getElementById('crispy');
var gluttenfree=document.getElementById('gluttenfree');
var sausages=document.getElementById('sausages');
var pepperoni=document.getElementById('pepperoni');
var total=0;

$(document).ready(function(e) {
  // var kadog=$("#kidogo").is(":checked");



// var 0=$("#kidogo").is(":not(:checked"));
// if($(this).is(":checked")){
//                 alert("Checkbox is checked.");
//             }
//             else if($(this).is(":not(:checked)")){
//                 alert("Checkbox is unchecked.");
 $('.foodtotal').click(function(e) {
e.preventDefault();
if($("#kadogo").is(":checked")){
console.log("true");

total+=500;
console.log(total)
}else if($("#kadogo").is(":not(:checked)")){
total+=0;
console.log("false");
console.log(total);
}

if($("#kubwa").is(":checked")){
console.log("true");

total+=700;
console.log(total)
}else if($("#kubwa").is(":not(:checked)")){
total+=0;
console.log("false");
console.log(total);
}

if($("#kubwakabisa").is(":checked")){
console.log("true");

total+=900;
console.log(total)
}else if($("#kubwakabisa").is(":not(:checked)")){
total+=0;
console.log("false");
console.log(total);
}
if($("#pickle").is(":checked")){
console.log("true");

total+=100;
console.log(total)
}else if($("#pickle").is(":not(:checked)")){
total+=0;
console.log("false");
console.log(total);
}
if($("#kale").is(":checked")){
console.log("true");

total+=100;
console.log(total)
}else if($("#kale").is(":not(:checked)")){
total+=0;
console.log("false");
console.log(total);
}
if($("#vegan").is(":checked")){
console.log("true");

total+=100;
console.log(total)
}else if($("#vegan").is(":not(:checked)")){
total+=0;
console.log("false");
console.log(total);
}
if($("#bbq").is(":checked")){
console.log("true");

total+=150;
console.log(total)
}else if($("#bbq").is(":not(:checked)")){
total+=0;
console.log("false");
console.log(total);
}
if($("#chicken").is(":checked")){
console.log("true");

total+=150;
console.log(total)
}else if($("#chicken").is(":not(:checked)")){
total+=0;
console.log("false");
console.log(total);
}
if($("#honey").is(":checked")){
console.log("true");

total+=150;
console.log(total)
}else if($("#honey").is(":not(:checked)")){
total+=0;
console.log("false");
console.log(total);
}
if($("#crispy").is(":checked")){
console.log("true");

total+=200;
console.log(total)
}else if($("#crispy").is(":not(:checked)")){
total+=0;
console.log("false");
console.log(total);
}
if($("#stuffed").is(":checked")){
console.log("true");

total+=300;
console.log(total)
}else if($("#stuffed").is(":not(:checked)")){
total+=0;
console.log("false");
console.log(total);
}
if($("#gluttenfree").is(":checked")){
console.log("true");

total+=250;
console.log(total)
}else if($("#gluttenfree").is(":not(:checked)")){
total+=0;
console.log("false");
console.log(total);
}
if($("#sausages").is(":checked")){
console.log("true");

total+=100;
console.log(total)
}else if($("#sausages").is(":not(:checked)")){
total+=0;
console.log("false");
console.log(total);
}
if($("#pepperoni").is(":checked")){
console.log("true");

total+=250;
console.log(total)
}else if($("#pepperoni").is(":not(:checked)")){
total+=0;
console.log("false");
console.log(total);
}
alert(total);
       function getLocation(){
var locate = prompt("Enter your location");

     if (locate != null){
           alert("Thank you. Your pizza will be delivered");
       };
       };

getLocation();

});


});
