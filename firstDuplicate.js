function firstDuplicate(a) {
  const dict = {}
  recursive(a, 0)
  return findSmallestNum(dict)

  function recursive(array, start) {
    if (start === array.length - 1) return
    const target = array[start]
    for (let i = start + 1; i < array.length; i++) {
      const num = array[i]
      target === num && !dict[num] ? (dict[num] = i) : ''
    }
    recursive(array, start + 1)
  }

  function findSmallestNum(dict) {
    if (Object.keys(dict).length === 0) return -1
    let smallest = Infinity
    let smallestNum = null
    for (let num in dict) {
      const index = dict[num]
      if (index < smallest) {
        smallest = index
        smallestNum = num
      }
    }
    return Number(smallestNum)
  }
}
firstDuplicate([1, 1, 2, 2, 1])
