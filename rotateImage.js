function rotateImage(a) {
  // make copy
  let newArr = rotate(rotate(rotate(a)))
  return newArr.map(row => row.reverse())
}

function rotate(arr) {
  let newArr = arr.map(row => row.map(num => []))
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      newArr[j][i] = arr[i][j]
    }
  }
  return newArr
}
const image = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(rotateImage(image))
