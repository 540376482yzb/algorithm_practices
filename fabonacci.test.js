const {fab, printFab} = require('./fabonacci')

console.log(fab)
test('Nth Fabonacci number', () => {
  expect(fab(1)).toBe(1)
  expect(fab(2)).toBe(2)
  expect(fab(3)).toBe(3)
  expect(fab(4)).toBe(5)
  expect(fab(7)).toBe(21)
})

test('Fabonacci sequence', () => {
  expect(printFab(1).length).toBe(2)
  expect(printFab(2).length).toBe(3)
  expect(printFab(3).length).toBe(4)
  printFab(3).forEach((num, index) => {
    expect(fab(index)).toBe(num)
  })
  printFab(7).forEach((num, index) => {
    expect(fab(index)).toBe(num)
  })
})
