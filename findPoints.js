// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message')

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const dicts = {}
  for (let i = 0; i < Math.ceil(A.length / 2); i++) {
    const startPoint = A[i]
    for (let j = i + 1; j < A.length; j++) {
      const nexPoint = A[j]
      // if (A[i] 100000000 || A[j] > 100000000) {
      //   continue
      // }
      const deriv = (nexPoint[1] - startPoint[1]) / (nexPoint[0] - startPoint[0])
      if (!dicts[deriv]) {
        dicts[deriv] = []
        dicts[deriv].push(startPoint)
        dicts[deriv].push(nexPoint)
      } else {
        const onePoint = dicts[deriv][1]
        const deriv2 = (nexPoint[1] - onePoint[1]) / (nexPoint[0] - onePoint[0])
        if (
          deriv2 === deriv &&
					!dicts[deriv].find(point => point[0] === nexPoint[0] && point[1] === nexPoint[1])
        )
          dicts[deriv].push(nexPoint)
      }
    }
  }
  const newArr = []
  for (let deriv in dicts) {
    const points = dicts[deriv]
    if (points.length >= 3) {
      recursive(points)
    }
  }
  function recursive(points, path = []) {
    if (path.length === 3) {
      newArr.push(path)
      return
    }
    for (let i = 0; i < points.length; i++) {
      const point = points[i]
      const rest = points.slice(i + 1)
      recursive(rest, [point].concat(path))
    }
  }

  return newArr.length
}

console.log(solution([[0, 0], [1, 1], [2, 2], [3, 3], [3, 2], [4, 2], [5, 1]]))
