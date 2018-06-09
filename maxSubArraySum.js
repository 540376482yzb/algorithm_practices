// return the max sum of a continuous block of array
/*
  [-5,2,5,-2,5,1]
  the max sum is 2 + 5 -2 + 5 + 1 = 11
  the block is [2,5,-2,5,1]

*/

function maxSubArraySum(array) {
  let sum = -Infinity
  function recursive(array, sizeOfWindow = 1) {
    // move through each array
    if (array.length === sizeOfWindow) return
    for (let i = 0; i < array.length; i++) {
      //creat window
      const start = i
      const end = start + sizeOfWindow
      const localSum = sumWindowArray(array, start, end)
      //compare the sum in the window with total sum
      if (localSum && localSum > sum) {
        sum = localSum
      }
    }
    recursive(array, sizeOfWindow + 1)
  }
  recursive(array)
  return sum
}

function sumWindowArray(array, start, end) {
  let localSum = 0
  if (end > array.length) return null
  // sum up all the value in window
  for (let j = start; j < end; j++) {
    localSum += array[j]
  }
  return localSum
}

console.log(maxSubArraySum([-5, 2, 5, -2, 5, 1]))
console.log(maxSubArraySum([-5, -2, -1, -2]))
console.log(maxSubArraySum([0, 1, 2, 3, 4]))
