//combination without repetition, order does not matter
/*
  (n, r) choose r from n
  formula:
  n! / [r! (n-r)!]

  sample input:[1,2,3,4,5,6]
  choose 4 out of 6
  
  1.building tree
  2.trace the path
  3. terminate at base case

*/

function comboWithoutRepeat(chooseFrom, numChosen) {
  const combinations = []
  function recursive(chooseFrom, numChosen, path = []) {
    if (numChosen === 0) {
      combinations.push(path)
      return
    }
    for (let i = 0; i <= chooseFrom.length - numChosen; i++) {
      const letter = chooseFrom[i]
      const rest = chooseFrom.slice(i + 1)
      recursive(rest, numChosen - 1, [letter].concat(path))
    }
  }
  recursive(chooseFrom, numChosen)
  return combinations
}

//Imaging pick combination is diving through tree. It's root is []
/*
    example input: [1,2,3] pick 2

              ''
          /   |     \
        1     2     3
      |       |       \
    1 2 3   1 2 3    1 2 3 

  */

function comboWithRepeat(chooseFrom, numChosen) {
  const combinations = []
  const dict = {}
  function recursive(chooseFrom, numChosen, path = []) {
    if (numChosen === 0) {
      const strPath = path.sort().join('')
      if (!dict[strPath]) {
        dict[strPath] = path
        combinations.push(path)
      }
      return
    }
    //iterate through all numbers in the array
    for (let i = 0; i < chooseFrom.length; i++) {
      const letter = chooseFrom[i]
      //iterate through numbers again
      //with one less chance to choose
      //carry over the letter selected in the path of tree

      // path = [letter].concat(path)
      // recursive(chooseFrom, numChosen - 1,path)
      recursive(chooseFrom, numChosen - 1, [letter].concat(path))
    }
  }
  recursive(chooseFrom, numChosen)
  return combinations
}
console.log(comboWithRepeat([1, 2, 3, 4], 2))
