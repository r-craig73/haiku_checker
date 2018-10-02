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
    if(anyWord === "e") {
      counter += 1;
    }
  }
  return counter
};

Solution.prototype.countEndWithIa = function() {
  let counter = 0;
  let phrase = this.haiku
  for (let i = 0; i < phrase.split(" ").length; i++) {
    let iaWord = phrase.split(" ")[i].slice(-2)
    if(iaWord === "ia") {
      counter += 1;
    } 
  }
  return counter;
};

Solution.prototype.countPrePostFix = function() {
  let counter = 0;
  let phrase = this.haiku
  for (let i = 0; i < phrase.split(" ").length; i++) {
    let twoPreWord = phrase.split(" ")[i].slice(0, 2)
    let threePreWord = phrase.split(" ")[i].slice(0, 3)
    let fourPreWord = phrase.split(" ")[i].slice(0, 4)
    let fivePreWord = phrase.split(" ")[i].slice(0, 5)
    let fourPostWord = phrase.split(" ")[i].slice(-4)
    let fivePostWord = phrase.split(" ")[i].slice(-5)
    if(twoPreWord === "an" || twoPreWord === "ab") {
      counter += 1;
    } else if (twoPreWord === "ad" || twoPreWord === "bi") {
      counter += 1;
    } else if (twoPreWord === "di" || twoPreWord === "ex") {
      counter += 1;
    } else if (twoPreWord === "in" || twoPreWord === "im") {
      counter += 1;
    } 
    if(threePreWord === "abs" || threePreWord === "dis") {
      counter += 1;
    } else if (threePreWord === "ped" || threePreWord === "pre") {
      counter += 1;
    } else if (threePreWord === "pro" || threePreWord === "sin") {
      counter += 1;
    } else if (threePreWord === "sym" || threePreWord === "syn") {
      counter += 1;
    } else if (threePreWord === "vis") {
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
  let consts = this.haiku.match(/[cspwt][h]/g);
  if(consts) {
    return consts.length
  } else {
    return 0
  }
};
