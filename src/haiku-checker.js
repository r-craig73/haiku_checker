export function Solution(haiku) {
  this.haiku = haiku.replace(/[^a-zA-Z ]/g, "").toLowerCase();
  this.word = this.haiku.split(" ");
}

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
  let consts = this.haiku.match(/[aeiouy]/g);
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
  let consts = this.haiku.match(/[aeiouy]{2,3}/g);
  if(consts) {
    return consts.length * -1
  } else {
    return 0
  }
};

Solution.prototype.countEndWithE = function() {
  let counter = 0;
  let words = this.haiku;
  for (let i = 0; i < words.split(" ").length; i++) {
    let anyWord = words.split(" ")[i].slice(-1)
    if(anyWord === "e" && words.split(" ")[i].length > 3) {
      counter -= 1;
    }
  }
  return counter
};

Solution.prototype.countEndWithIa = function() {
  let counter = 0;
  let phrase = this.haiku;
  for (let i = 0; i < phrase.split(" ").length; i++) {
    let iaWord = phrase.split(" ")[i].slice(-2)
    if(iaWord === "ia") {
      counter -= 1;
    } 
  }
  return counter;
};

Solution.prototype.countEndWithLe = function() {
  let counter = 0;
  let phrase = this.haiku;
  for (let i = 0; i < phrase.split(" ").length; i++) {
    let oneWord = phrase.split(" ")[i]
    let twoPostWord = oneWord.slice(-2)
    let thirdPostLetter = oneWord.slice(-3, -2)
    if(twoPostWord === "le" && thirdPostLetter.match(/[qwrtypsdfghjklzxcvbnm]/g)) {
      counter += 1;
    }
  }
  return counter;
};

Solution.prototype.countConSound = function() {
  let counter = 0;
  let phrase = this.haiku
  for (let i = 0; i < phrase.split(" ").length; i++) {
    let oneWord = phrase.split(" ")[i].slice(2, -2)
    if (oneWord.match(/[cspwt][h]/g)) {
      counter += 1;
    }
  }
  return counter;
};

Solution.prototype.haikuNumber = function() {
  let phrase = new Solution(this.haiku);
  let functions = [phrase.countVowels(), phrase.countEndWithLe(), phrase.countDoubleVowel(), phrase.countEndWithIa(), phrase.countEndWithE()]
  let result = 0;
  for(let i = 0; i < functions.length; i++) {
    result += parseInt(functions[i], 10);
  }
  return result;
};
