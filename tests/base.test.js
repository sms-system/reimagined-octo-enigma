const getPrimes = require('../index')

test('basic', () => {
  expect(getPrimes(11)).toEqual([2,3,5,7])
  expect(getPrimes(7)).toEqual([2,3,5])
  expect(getPrimes(1)).toEqual([])
  expect(getPrimes(97)).toEqual([
    2,  3,  5,  7, 11, 13, 17, 19,
   23, 29, 31, 37, 41, 43, 47, 53,
   59, 61, 67, 71, 73, 79, 83, 89
 ])
 expect(getPrimes(100)).toEqual([
   2,  3,  5,  7, 11, 13, 17, 19,
  23, 29, 31, 37, 41, 43, 47, 53,
  59, 61, 67, 71, 73, 79, 83, 89, 97
])
})