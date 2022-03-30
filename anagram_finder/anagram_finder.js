const AnagramFinder = function (word) {
    this.word = word.toLowerCase().split('');

}

// AnagramFinder.prototype.findAnagrams = function (otherWords) {
//     return otherWords.filter((word)=>{
//         let wordList = word.toLowerCase().split('');
//         return this.word.every((letter)=>{
//             return wordList.some(char => char.toLowerCase() === letter)
//           })
//     })}
       
AnagramFinder.prototype.findAnagrams = function (otherWords) {
    return otherWords.filter((word)=>{
        let wordList = word.toLowerCase().split('');
        if (wordList.join('') === this.word.join(''))
            return false;
        if (wordList.length !== this.word.length)
            return false;
        return this.word.every((letter)=>{
            return wordList.some(char => char.toLowerCase() === letter)
           })
    })}


module.exports = AnagramFinder;
