exports.isCharacterMatch = function(string1, string2) {
    const string1_obj = {};
    for (let letter of string1.toLowerCase()) {
        if (letter !== " ") {
            string1_obj[letter] = string1_obj[letter] + 1 || 1;
        }
    }
    for (let letter of string2.toLowerCase()) {
        if (letter !== " ") {
            if (letter in string1_obj) {
                string1_obj[letter] -= 1;
            } else {
                return false;
            }
        }
    }
    for (let letter in string1_obj) {
        if (string1_obj[letter] > 0) {
            return false;
        }
    }
    return true;
}
console.log(isCharacterMatch('charm', 'march') === true);
console.log(isCharacterMatch('zach', 'attack') === false);
console.log(isCharacterMatch('CharM', 'mARcH') === true);
console.log(isCharacterMatch('abcde2', 'c2abed') === true);

console.log("This test is for the challenge quesiton");
console.log(isCharacterMatch('Anna Madrigal', 'A man and a girl') === true);



exports.anagramsFor = function (word, listOfWords) {
    const anagrams = [];
    for (let wordFromList of listOfWords) {
        if (isCharacterMatch(word, wordFromList)) {
            anagrams.push(wordFromList);
        }
    }
    return anagrams;
}

listOfWords = ["threads", "trashed", "hardest", "hatreds", "hounds"];

console.log(anagramsFor("threads", listOfWords).length === 4);
console.log(anagramsFor("threads", listOfWords)[0] === "threads");
console.log(anagramsFor("threads", listOfWords)[1] === "trashed");
console.log(anagramsFor("threads", listOfWords)[2] === "hardest");
console.log(anagramsFor("threads", listOfWords)[3] === "hatreds");

console.log(anagramsFor("apple", listOfWords).length === 0);