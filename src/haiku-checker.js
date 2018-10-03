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

Solution.prototype.countPrePostFix = function() {
  let counter = 0;
  let phrase = this.haiku;
  for (let i = 0; i < phrase.split(" ").length; i++) {
    let oneWord = phrase.split(" ")[i]
    let twoPreWord = phrase.split(" ")[i].slice(0, 2)
    let threePreWord = phrase.split(" ")[i].slice(0, 3)
    let fourPreWord = phrase.split(" ")[i].slice(0, 4)
    let fivePreWord = phrase.split(" ")[i].slice(0, 5)
    let twoPostWord = phrase.split(" ")[i].slice(-2)
    let thirdPostWord = phrase.split(" ")[i].slice(-3, -2)
    let fourPostWord = phrase.split(" ")[i].slice(-4)
    let fivePostWord = phrase.split(" ")[i].slice(-5)
    if(twoPreWord === "an" && oneWord.length > 3) {
      counter += 1;
    } else if (twoPreWord === "bi" && oneWord.length > 2) {
      counter += 1;
    } else if (twoPreWord === "ad" && oneWord.lengh > 2) {
      counter += 1;
    } else if (twoPreWord === "ex" && oneWord.length > 2) {
      counter += 1;
    } else if (twoPreWord === "we" && oneWord.length > 2) {
      counter += 1;
    } else if (twoPreWord === "he" && oneWord.length > 2) {
      counter += 1;
    } else if (twoPreWord === "me" && oneWord.length > 2) {
      counter += 1;
    } else if (twoPreWord === "di" && oneWord.length > 2) {
      counter += 1;
    } 
    if(threePreWord === "dis") {
      counter += 1;
    } else if (threePreWord === "ped" || threePreWord === "pre") {
      counter += 1;
    } else if (threePreWord === "pro" || threePreWord === "sin") {
      counter += 1;
    } else if (threePreWord === "sym" || threePreWord === "syn") {
      counter += 1;
    } else if (threePreWord === "vis") {
      counter += 1;
    } else if (threePreWord === "she" && oneWord.length > 3) {
      counter += 1;
    }
    if(fourPreWord === "graph" || fourPreWord === "post" ) {
      counter += 1;
    } else if (fourPreWord === "vide") {
      counter += 1;
    } 
    if(fivePreWord === "trans") {
      counter += 1;
    }
    if(twoPostWord === "le" && thirdPostWord.match(/[qwrtypsdfghjklzxcvbnm]/g)) {
      counter += 1;
    }
    if(fourPostWord === "cide") {
      counter += 1;
    }
    if(fivePostWord === "scope") {
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
  let functions = [phrase.countVowels(), phrase.countPrePostFix(), phrase.countDoubleVowel(), phrase.countEndWithIa(),phrase.countEndWithE()]
  let result = 0;
  for(let i = 0; i < functions.length; i++) {
    result += parseInt(functions[i], 10);
  }
  return result;
};
