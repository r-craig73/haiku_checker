function Solution(haiku) {
  this.haiku = haiku;
}

exports.solutionModule = Solution;

Solution.prototype.countWords = function() {
  let arr = this.haiku.split(" ").length;
  // console.log(arr);
  return arr;
};

Solution.prototype.countNextConsonants = function() {
  let arr = this.haiku.split(" ").length;
  console.log("Words: " + arr);
  let consts = this.haiku.match(/[qwrtypsdfghjklzxcvbnm]{2,}/g);
  console.log("2 consonants list: " + consts);
  console.log("2 consonants #: " + consts.length);
  return consts.length;
};

Solution.prototype.countVowels = function() {
  let arr = this.haiku.split(" ").length;
  console.log("Words: " + arr);
  let consts = this.haiku.match(/[aeiou]/g);
  console.log("vowels list: " + consts);
  console.log("vowels :" + consts.length);
  return consts.length;
};

Solution.prototype.countPair = function() {
  let arr = this.haiku.split(" ").length;
  console.log("Words: " + arr);
  let consts = this.haiku.toLowerCase().match(/[aeiou][qwrtypsdfghjklzxcvbnm]/g);
  console.log("vc pair:" + consts);
  console.log("vc pair:" + consts.length);
  return consts.length;
};

Solution.prototype.countDoubleVowel = function() {
  let arr = this.haiku.split(" ").length;
  console.log("Words: " + arr);
  let consts = this.haiku.toLowerCase().match(/[aeiou]{2,}/g);
  console.log("double vowels: " + consts);
  console.log("# of double vowels: " + consts.length);
  return consts.length;
};
