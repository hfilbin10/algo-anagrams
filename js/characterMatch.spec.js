const { isCharacterMatch, anagramsFor } = require("./characterMatch").default;

describe("Test isCharacterMatch()", () => {
    test("isCharacterMatch('charm','march') == true", () => {
        expect(isCharacterMatch("charm", "march")).toBe(true);
    });

    test("isCharacterMatch('charm','match') == false", () => {
        expect(isCharacterMatch("charm", "match")).toBe(false);
    });

    test("isCharacterMatch('zach', 'attack') == false", () => {
        expect(isCharacterMatch("zach", "attack")).toBe(false);
    });

    test("isCharacterMatch('CharM','mARcH') == true", () => {
        expect(isCharacterMatch("CharM", "mARcH")).toBe(true);
    });

    test("isCharacterMatch('abcde2','c2abed') == true", () => {
        expect(isCharacterMatch("abcde2", "c2abed")).toBe(true);
    });
});

describe("Test anagramsFor() to return list of words that are anagrams", () => {
    listOfWords = ["threads", "trashed", "hardest", "hatreds", "hounds"];
    test("anagramsFor('threads', listOfWords).length === 4", () => {
        expect(anagramsFor("threads", listOfWords).length).toBe(4);
    });
    test("anagramsFor('apple', listOfWords).length === 0", () => {
        expect(anagramsFor("apple", listOfWords).length).toBe(0);
    });

    test("anagramsFor('threads', listOfWords)[0] == 'threads'", () => {
        expect(anagramsFor("threads", listOfWords)[0]).toBe("threads");
    });
    test("anagramsFor('threads', listOfWords)[1] == 'trashed'", () => {
        expect(anagramsFor("threads", listOfWords)[1]).toBe("trashed");
    });
    test("anagramsFor('threads', listOfWords)[2] == 'hardest'", () => {
        expect(anagramsFor("threads", listOfWords)[2]).toBe("hardest");
    });
    test("anagramsFor('threads', listOfWords)[3] == 'hatreds'", () => {
        expect(anagramsFor("threads", listOfWords)[3]).toBe("hatreds");
    });
});