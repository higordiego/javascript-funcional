module.exports.isPrice = (object) => (object.price === 300) ? object : null

module.exports.price = (fn, object) => object.filter(fn)
