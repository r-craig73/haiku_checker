import {Solution} from './../src/haiku-checker.js';
import {countWords} from './../src/haiku-checker.js';

describe('Solution', function() {
  it('should make sure a haiku has 17 syllables', function(){
    var solution = new Solution(17);
    expect(solution.haiku).toEqual(17);
  });

  // it('should count number of words in the haiku', function() {
  //   var goodHaiku = "An old silent pond, A frog jumps into the pond, splash! Silence again.";
  //   var wordSolution = new Solution(13);
  //   expect(wordSolution.haiku).toEqual(13);
  // });

  // it('should be able to split a word at a vowel', function () {
  //   var vowelSolution = new Solution();
  //   expect(solution.splitConsonants())
  //   .toEqual("An old silent pond "+
  //   "A frog jumps into the pond splash Silence again");
  // });


});
