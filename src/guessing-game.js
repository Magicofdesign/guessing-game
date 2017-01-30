class GuessingGame {
    constructor() {
        this.min;
        this.max;
    }

    setRange(min, max) {
    	this.min = min;
    	this.max = max;
    }

    guess() {
    	var newGuess = Math.ceil( (this.max - this.min) / 2 + this.min );
    	return newGuess;
    }

    lower() {
    	this.max = Math.ceil( (this.max - this.min) / 2 + this.min );
    }

    greater() {
    	this.min = Math.ceil( (this.max - this.min) / 2 + this.min );
    } 
}

module.exports = GuessingGame;
