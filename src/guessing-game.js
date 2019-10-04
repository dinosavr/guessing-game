class GuessingGame {
    constructor(min, max, result) {        
        this.min = min;
        this.max = max;
        this.result = result;
    }

    setRange(min, max) {      

        this.min = min;
        this.max = max;
        this.result = (max-min)/2;

        // console.log('SetRange result = ' + this.result);   
        // console.log('SetRange Min Max = ' + this.min, this.max);    
        // console.log('');
    }

    guess() {   
       
        // console.log('Guess result = ' + this.result);   
        // console.log('');  
        this.result = Math.round(this.result);

        return this.result;
    }

    lower() {

        this.max = this.result;
        this.result = this.result - (this.max-this.min)/2;

        // console.log('Lower result finish = ' + this.result);   
        // console.log('Lower Min Max finish = ' + this.min, this.max);  
        // console.log('');

    }

    greater() {

        this.min = this.result;
        this.result = this.result + (this.max-this.min)/2;

        // console.log('Greater result finish = ' + this.result);   
        // console.log('Greater Min Max finish = ' + this.min, this.max);  
        // console.log('');
    }
}

module.exports = GuessingGame;
