const powerSet = require('./powerset')

test('Power set', () => {
  expect(powerSet([1, 2, 3]).length).toBe(8)
  expect(powerSet([]).length).toBe(1)
})
