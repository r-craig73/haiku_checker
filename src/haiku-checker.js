export function Solution(haiku) {
  this.haiku = haiku.replace(/[^a-zA-Z ]/g, "").toLowerCase();
}
// add a branch to consider 0 values

exports.solutionModule = Solution;

Solution.prototype.countWords = function() {
  let arr = this.haiku.split(" ").length;
  return arr;
};

Solution.prototype.countNextConsonants = function() {
  let consts = this.haiku.match(/[qwrtypsdfghjklzxcvbnm]{2,}/g);
  if(consts) {
    return consts.length
  } else {
    return 0
  }
};

Solution.prototype.countVowels = function() {
  let consts = this.haiku.match(/[aeiou]/g);
  if(consts) {
    return consts.length
  } else {
    return 0
  }
};

Solution.prototype.countPair = function() {
  let consts = this.haiku.match(/[aeiou][qwrtypsdfghjklzxcvbnm]/g);
  if(consts) {
    return consts.length
  } else {
    return 0
  }
};

Solution.prototype.countDoubleVowel = function() {
  let consts = this.haiku.match(/[aeiou]{2,}/g);
  if(consts) {
    return consts.length
  } else {
    return 0
  }
};

Solution.prototype.countEndWithE = function() {
  let counter = 0;
  let words = this.haiku
  for (let i = 0; i < words.split(" ").length; i++) {
    let anyWord = words.split(" ")[i].slice(-1)
    if(anyWord.match(/e$/m)) {
      counter += 1;
    }
  }
  return counter
};

Solution.prototype.countEndWithIa = function() {
  let len = 0;
  let phrase = this.haiku
  for (let i = 0; i < phrase.split(" ").length; i++) {
    let iaWord = phrase.split(" ")[i].slice(-2)
    if(iaWord === "ia") {
      len += 1;
    } 
  }
  return len;
};
