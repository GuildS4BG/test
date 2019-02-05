//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance

class Klasse{
	constructor(a,b,c){
		this.a = a;
		this.b = b;
		this.c = c;
	}
}
Klasse.prototype.d = "!";
var velkommen = new Klasse("hei ", "alle ", "sammen ");
function skrivAlt(){
	console.log(velkommen.a + velkommen.b + velkommen.c + velkommen.d);
}

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array
var numbers = [1,2,3,4,5,6,7,8,9,10];
numbers.slice(4,5);
//3. Delete the last number in the array that you created above.
numbers.pop();

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 
var string = "Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied. Strawberries";
function erstatt(){
	var bananaSplit = string.split(" ");
	for (var i = 0; i < string.length; i++){
		string = string.replace("Strawberries", "Bananas");
		string = string.replace("strawberries", "bananas");
		string = string.replace("Strawberry", "Banana");
		string = string.replace("strawberry", "banana");
	}
	console.log(string);
}

//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.
var changingArray = ["Start", "Rosenborg", "Viking", "Molde"];
console.log(changingArray);
function detSkjer(){
	changingArray = [];
	changingArray = ["Toyota", "BMW", "Ford", "Audi"];
	console.log(changingArray);
}

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.
var persons = [
	{fName: "Frank", lName: "Albertsen", age: 91},
	{fName: "Heidi", lName: "Jenssen", age: 42},
	{fName: "Heidi", lName: "Berg", age: 23}
];

var fintNavn = persons.filter(function(person){
	return (person.fName === "Heidi")
});
//7. Create a simple function that logs the date.
function checkDate(){
	var d = new Date();
	console.log(d);
}