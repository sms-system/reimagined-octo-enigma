module.exports = (limit) => {
  if (limit < 3) { return [] }
  if (limit < 4) { return [2] }
  if (limit < 6) { return [2, 3] }

  const primes = [2, 3]

  for (let i = 5; i < limit; i++) {
    const maxDivisor = Math.floor(Math.sqrt(i))
    let isPrime = true
    for (let j = 2; j <= maxDivisor; j++) {
      if (i % j === 0) { isPrime = false; break }
    }
    if (isPrime) primes.push(i)
  }

  return primes
}