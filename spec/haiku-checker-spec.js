let Solution = require('./../src/haiku-checker.js').solutionModule;

describe('Solution', function() {
  it('should make sure a haiku has 17 syllables', function(){
    let solution = new Solution(17);
    expect(solution.haiku).toEqual(17);
  });

  it('should count number of words in the haiku', function() {
    let goodHaiku = "An old silent pond, A frog jumps into the pond, splash! Silence again.";
    let wordSolution = new Solution(goodHaiku);
    expect(wordSolution.countWords()).toEqual(13);
  });

  it('should be able to detect 2 or more consonants next to each other', function () {
    let consonantsSolution = new Solution("An old silent pond, A frog jumps into the pond, splash! Silence again.");
    expect(consonantsSolution.countNextConsonants()).toEqual(11);
  });

  it('should be able to count vowels for each word', function () {
    let consonantsSolution = new Solution("An old silent pond, A frog jumps into the pond, splash! Silence again.");
    expect(consonantsSolution.countVowels()).toEqual(17);
  });

  it('should be able to count vowels and consonants pairs', function () {
    let pairSolution = new Solution("An old silent pond, A frog jumps into the pond, splash! Silence again.");
    expect(pairSolution.countPair()).toEqual(14);
  });

});
