

module.exports.calculate = (fn, x, y) => fn(x, y)

module.exports.sum = (x, y) => x + y

module.exports.mult = (x, y) => x * y

module.exports.calculateGeneric = (x, y, condition) => new Function("x", "y", `return ${x}${condition}${y}`)()



