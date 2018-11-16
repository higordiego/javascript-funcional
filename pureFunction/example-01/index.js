
module.exports.sum = (x, y) => {
  return x + y
}

module.exports.generateNumber = () => {
  const random = Math.random()
  return generate(random)
}


module.exports.generateRandom = () => Math.random()

module.exports.generate = (generateRandom) => generateRandom() + 1

