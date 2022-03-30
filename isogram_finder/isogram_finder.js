const IsogramFinder = function (word) {
    this.word = word.toLowerCase().split('')

}

IsogramFinder.prototype.isIsogram = function () {
    return this.word.every((letter, index)=>{
        let newList = this.word
        newList.splice(index, 1)
        return !newList.includes(letter)
            
        
        
        
      })
}

module.exports = IsogramFinder;
