var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");
var inquirer = require("inquirer");

console.log("===============================================");
console.log("Welcome to the Flashcard App:");
console.log("Do you want to go with BasicCard? or ClozeCard?");
console.log("In BasicCard, front of the card will show question and back will show the answer");
console.log("In ClozeCard, you have to fill in the blank");
console.log("===============================================");

inquirer.prompt([
{
	type: "list",
	message: "Do you want to go with BasicCard or ClozeCard?",
	name: "selection",
	choices: ["BasicCard","ClozeCard"]
}]).then(function (inquirerResponse) {
	if(inquirerResponse)
		console.log("You chose : ",inquirerResponse.selection);
	if(inquirerResponse.selection === "BasicCard")
		getBasicCard();
	else if(inquirerResponse.selection === "ClozeCard")
		createClozeCard();
})

function getBasicCard() {
	var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

	// "Who was the first president of the United States?"
	console.log(firstPresident.front); 

	// "George Washington"
	setTimeout(function print() {console.log(firstPresident.back)},"3000"); 
	//clearInterval(setId);

}

function createClozeCard() {
	var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

    getClozeCard(firstPresidentCloze);

    var brokenCloze = new ClozeCard(
    "This is broken.", "Ooops!..");

    getClozeCard(brokenCloze);

}

function getClozeCard(constructorObject) {
	// " ... was the first president of the United States.
	console.log("----------------------------------");
	console.log(constructorObject.getPartialText()); 

	// "George Washington"
	//console.log(firstPresidentCloze.cloze); 
	//setTimeout(function print() {console.log(constructorObject.cloze)}, "1000");
	console.log(constructorObject.cloze);

	// "George Washington was the first president of the United States.
	//setTimeout(function print() {console.log(constructorObject.fullText)}, "1200");
	console.log(constructorObject.fullText);
	console.log("===================================");

	// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
	//var brokenCloze = new ClozeCard("This doesn't work", "oops");

}