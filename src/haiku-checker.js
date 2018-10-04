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
  let counter = 0;
  let phrase = this.haiku;
  for (let i = 0; i < phrase.split(" ").length; i++) {
    let oneWord = phrase.split(" ")[i]
    if (oneWord.match(/[a][iuy]/g)) {
      counter -= 1;
    } else if (oneWord.match(/[e][aeiy]/g)) {
      counter -= 1;
    } else if (oneWord.match(/[i][aeo]/g)) {
      counter -= 1;
    } else if (oneWord.match(/[o][aeioy]/g)) {
      counter -= 1;
    } else if (oneWord.match(/[u][ey]/g)) {
      counter -= 1;
    }
    if (oneWord.match(/[e][a][u]/g)) {
      counter -= 1;
    } else if (oneWord.match(/[i][o][u]/g)) {
      counter -= 1;
    } else if (oneWord.match(/[u][e][u]/g)) {
      counter -= 1;
    }
  }
  return counter
};

Solution.prototype.countEndWithE = function() {
  let counter = 0;
  let words = this.haiku;
  for (let i = 0; i < words.split(" ").length; i++) {
    let oneWord = words.split(" ")[i]
    let anyWord = words.split(" ")[i].slice(-1);
    let lastThreeLetters = words.split(" ")[i].slice(-3);
    if(anyWord === "e" && words.split(" ")[i].length > 3) {
      counter -= 1;
    }
    if (lastThreeLetters === "ire") {
      counter += 1;
    } else if (lastThreeLetters === "our" && oneWord.length > 3) {
      counter += 2;
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
    let lastTwoLetters = oneWord.slice(-2)
    let thirdPostLetter = oneWord.slice(-3, -2)
    if(lastTwoLetters === "le" && thirdPostLetter.match(/[qwrtypsdfghjklzxcvbnm]/g)) {
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
