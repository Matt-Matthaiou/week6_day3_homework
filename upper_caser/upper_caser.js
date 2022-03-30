const UpperCaser = function (words) {
    this.words = words
}

UpperCaser.prototype.toUpperCase = function () {
    let upperChars =  this.words.map((letter)=>{
        return letter.toUpperCase();
    });
    return upperChars
}

module.exports = UpperCaser;
