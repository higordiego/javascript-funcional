
module.exports.addOne  = (x) => x + 1;

module.expors.sum = (x) => x + x;


module.exports.compose = (f, g) => {
  return function(x) {
    return function(g(x))
  }
}

module.exports.parseNumber = (x) => parseFloat(x);

module.exports.multi = (x) => x * x;

module.exports.dificulty = value => value.dificulty;

