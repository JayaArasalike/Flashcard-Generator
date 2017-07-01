function ClozeCard(text, cloze) {
	this.fullText = text;
	this.cloze = cloze;

};

ClozeCard.prototype.getPartialText = function() {
	
		if(this.fullText.indexOf(this.cloze) === -1) {
			
			return (this.cloze + " does not exist in the sentence");
		}

		else {

			this.partialText = this.fullText.replace(this.cloze, "..... ");
			return this.partialText;
		}
};
module.exports = ClozeCard;