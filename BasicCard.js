//Basic card constructor
function BasicCard(front, back) {
	this.front = front;
	this.back = back;
	this.printFront = function() {
		console.log("Your question is : ",this.front);
	}
	this.printBack = function() {
		console.log("Answer is: ",this.back);
	}
};
module.exports = BasicCard;