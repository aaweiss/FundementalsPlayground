//JS file
// console.log("hello World");

// var sentence = "my name is Alayna"

//  	console.log(sentence);
//  while (sentence.length > 0){
//  	sentence = sentence.substring(0, sentence.length - 1);
//  	console.log(sentence);
//  }

//Sales Tax Calculator\\

// function subTotal() {
//   // document is the entire thing, price is a container that hold the number in the box next to product\\\
//   var price = document.orderform.price.value;
//   //quanity is a container that holds the number in the box next to "quanity".\\
//   var quantity = document.orderform.quantity.value;
//   productPrice = price * quantity;
//   document.orderform.subtotal.value = productPrice.toFixed(2); //.toFixed specifies the number of decimal points.\\\
//   return productPrice;
// }

// function calculateTax() {
//   //var subTotal = document.orderform.subtotal.value;
//   var subtotal = subTotal();
//   var stax = 0.03;
//     tax = subtotal * stax;
//   document.orderform.salestax.value = tax.toFixed(3);
//   return tax;
// }
 
// function grandTotal() {
//   var subtotal = subTotal();
//   var tax = calculateTax();
//   //the two lines below are not necessary because the value "tax" and "subtotal" are already stored above. 
//   //document.orderform.subtotal.value = subtotal.toFixed(2);
//   //document.orderform.salestax.value = tax.toFixed(2);
//   var gtotal = subtotal + tax;
//   document.orderform.gtotal.value = gtotal.toFixed(2);



//Array
var classmates = ["Matt", "Tara", "Danielle", "Evan"];

// for(var j=0; j<classmates.length; j++){
// console.log(classmates[j]);
// }

// for(var i in classmates){
// 	console.log(classmates[i]);
// }

// var typesOfSoda = new Array();

// typesOfSoda[0] = "Red Cream Soda";
// typesOfSoda[1] = "IBC";

// console.log(classmates);
// console.log(typesOfSoda);

// var mixedTypeArray = ["Elephant", 100, (5>2)];
// var sameType = ["Elephant", "Giraffe", "Duck"];


 
// BRONZE:
//     See if you can turn any of those loops above into functions that can be called. 
//     Call them in the console.

//     and/or 
// https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=mozilla%20docs%20javascript
//     Go to the Mozilla Docs and play with the built-in array methods. Manipulate the array in some way.

// function bronze(){
// 	for(var j=0; j<classmates.length; j++){
// console.log(classmates[j]);
// }
// }



//SILVER
// SILVER: 
//     Create an array of about 10 random numbers. Find a way to check to see if a duplicate of that random 
//     number is in that array. (For example, are there two 57s)
//     var randomNumberArray = [57, 58, 92, 10, 11, 83, 20, 28];


// var checkNum = 50
// var randomNumArray=[];
// while(randomNumArray.length <10){
// 	randomNumArray += Math.floor((Math.random() * 10) + 1);
// }
// console.log(randomNumArray)

// for (var j=0; j<randomNumArray.length; j++){
// 	if(checkNum == j)
// 		console.log("duplicate");
// 	else(console.log("unique number"));	
// }





///////////////////////********************************************************\\\\\\\\\\\\\\\\\\\\\\\\\\

///////////////////////********************************************************\\\\\\\\\\\\\\\\\\\\\\\\\\

///////////////////////********************************************************\\\\\\\\\\\\\\\\\\\\\\\\\\

///////////////////////********************************************************\\\\\\\\\\\\\\\\\\\\\\\\\\

///////////////////////********************************************************\\\\\\\\\\\\\\\\\\\\\\\\\\




//OBJECT LITERAL
///"blueprint"
var friend = {
	
	//Properties
	fullname			: "",
	age					: 0,
	married				: true,
	vocation			: "",
	closeLikeABrother 	: true,
	yearsKnown			: true,

//Method-function inside of an object
	printVocation	: function(){
		return this.vocation;
	},

	introduceTosisterInLaw : function(){
		if(this.yearsKnown >= 5 && this.closeLikeABrother == true && this.married == false){
			return "I want you to meet Lizzy.";
			}else{
				return "Have you tried Tinder?";
			}
		}
	}


var morganApter = Object.create(friend);
morganApter.fullname = "Morgan Apter";
morganApter.age = 19;
morganApter.married = false;
morganApter.vocation = "student";
morganApter.yearsKnown = 10;




var dog = {
	//properties
	breed 		: "",
	col			: "",
	gender 		: "",
	nam			: "", 

	printBreed : function(){
		return this.breed;

	},

	bestDog : function(){
		if(breed == "border collie" && nam == "frannie")
			return "best dog in the world";
		}else{
			return "cats are pointless";
		}		
	}
}


//Object 1
var frannie = Object.create(dog);
frannie.breed = "border collie";
frannie.col = "red";
frannie.gender = "female";
frannie.nam = "frannie";


//Object 2















































