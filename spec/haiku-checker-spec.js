let Solution = require('./../src/haiku-checker.js').solutionModule;

describe('Solution', function() {
  it('should count number of words in the haiku', function() {
    let wordSolution = new Solution("An old silent pond, A frog jumps into the pond, splash! Silence again.");
    expect(wordSolution.countWords()).toEqual(13);
  });

  it('should be able to detect 2 or more consonants for a word', function () {
    let consonantsSolution = new Solution("jumps beginning");
    expect(consonantsSolution.countNextConsonants()).toEqual(3);
  });

  it('should be able to count vowels for a word', function () {
    let countVowelsSolution = new Solution("Silence");
    expect(countVowelsSolution.countVowels()).toEqual(3);
  });

  it('should be able to count vowels and consonants pairs for a word', function () {
    let vowelConsonantSolution = new Solution("frog");
    expect(vowelConsonantSolution.countPair()).toEqual(1);
  });

  it('should count double vowels for a word', function () {
    let doubleVowels = new Solution("pool again beautiful");
    expect(doubleVowels.countDoubleVowel()).toEqual(-4);
  });

  it('should count number of times a word ends with e', function () {
    let endsWithE = new Solution("the silence.");
    expect(endsWithE.countEndWithE()).toEqual(-1);
    let endsWithE2 = new Solution("fire hour");
    expect(endsWithE2.countEndWithE()).toEqual(2);
  });

  it('should count number of times a word ends with ia', function () {
    let endsWithIa = new Solution("Inertia");
    expect(endsWithIa.countEndWithIa()).toEqual(-1);
  });

  it('should count number of times a word contains a prefix or suffix', function () {
    let preSuffix = new Solution("little trouble");
    expect(preSuffix.countEndWithLe()).toEqual(2);
  });

  it('should count number of times a word contains double consonants that makes a sound', function () {
    let endsWithConsSound = new Solution("flashdance atmosphere");
    expect(endsWithConsSound.countConSound()).toEqual(2);
  });

  it('should count the number of syllables', function(){
    let solution = new Solution("An old silent pond, A frog jumps into the pond, splash! Silence again.");
    expect(solution.haikuNumber()).toEqual(17);
    let solution1 = new Solution("Hello world");
    expect(solution1.haikuNumber()).toEqual(3);
  });

  it('should make sure the haiku contains 17 syllables', function(){
    let answer = new Solution("An old silent pond, A frog jumps into the pond, splash! Silence again.");
    expect(answer.aHaiku()).toEqual("Yes, the poem is a Haiku! 17 syllables!");
    let answer1 = new Solution("Hello world");
    expect(answer1.aHaiku()).toEqual("No, the poem is not a Haiku! 3 syllables!");
  });
});
