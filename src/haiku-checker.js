export function Solution(haiku) {
  this.haiku = haiku;
}
// add a branch to consider 0 values

exports.solutionModule = Solution;

Solution.prototype.countWords = function() {
  let arr = this.haiku.split(" ").length;
  return arr;
};

Solution.prototype.countNextConsonants = function() {
  let consts = this.haiku.match(/[qwrtypsdfghjklzxcvbnm]{2,}/g);
  return consts.length;
};

Solution.prototype.countVowels = function() {
  let consts = this.haiku.match(/[aeiou]/g);
  return consts.length;
};

Solution.prototype.countPair = function() {
  let consts = this.haiku.toLowerCase().match(/[aeiou][qwrtypsdfghjklzxcvbnm]/g);
  return consts.length;
};

Solution.prototype.countDoubleVowel = function() {
  let consts = this.haiku.toLowerCase().match(/[aeiou]{2,}/g);
  return consts.length;
};

Solution.prototype.countEndWithE = function() {
  let counter = 0;
  let consts = /.*e$/i;
  for (let i = 0; i < this.haiku.split(" ").length; i++) {
    if(this.haiku.split(" ")[i].match(consts)){
      counter++;
    }
  }
  return counter;
};

  Solution.prototype.countEndWithIa = function() {
    let counter = 0;
    let consts = /.*(ia)$/i;
    for (let i = 0; i < this.haiku.split(" ").length; i++) {
      if(this.haiku.split(" ")[i].match(consts)){
        counter++;
      }
    }
    return counter;
  };
