function Solution(haiku) {
  this.haiku = haiku;
}

exports.solutionModule = Solution;

Solution.prototype.countWords = function() {
  var arr = this.haiku.split(" ").length;
  console.log(arr);
  return arr;
}

// export function singleSplit() {
//
// }
