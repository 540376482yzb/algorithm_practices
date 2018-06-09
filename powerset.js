// We will have 2^n possible combinations (where n is a length of original set).
/*
  for input [a, b, c]
  we can break it down by:
  dec    binary     binary & [a,b,c]
  0         000         [0]
  1         001         [0,0,c]
  2         010         [0,b,0]
  3         011         [0,b,c]
  4         100         [a,0,0]
  5         101         [a,0,c]
  6         110         [a,b,0]
  7         111         [a,b,c]
 */

function powerSet(set) {
  const numComb = Math.pow(2, set.length)
  const subsets = []
  for (let i = 0; i < numComb; i++) {
    let subset = []
    set.forEach((num, index) => {
      if (i & (1 << index)) {
        subset.push(num)
      }
    })
    subsets.push(subset)
  }
  return subsets
}

module.exports = powerSet
