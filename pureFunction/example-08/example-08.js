const addOne  = (x) => x + 1

const sum = (x) => x + x

const compose = (f, g) => {
  return function(x) {
    return function(g(x))
  }
}


sum(addOne(2))

const calculate = compose(addOne, sum)
calculate(2)

const cars = [
  { brand: 'Corsa', plate: 'PLC-3545', price: 3000, dificulty: '2.0' },
  { brand: 'Corsa', plate: 'PN0-3555', price: 5000, dificulty: '3.0' },
  { brand: 'Corsa', plate: 'PR0-3423', price: 5000, dificulty: '4.0' }
]

const parseNumber = (x) => parseFloat(x);

const multi = (x) => x * x;

const dificulty = value => value.dificulty;

cars.map(dificulty)
  .map(compose(parseNumber, multi))



const finish = (phrase) => `${phrase}?`;

const pharese = (greeting) => `${greeting} como vai você`;

const greeting = (greting) => `Olá ${greting}`;

const toUpper = (txt) => txt.toUpperCase();


const composeStruct = (...fns) => fns.reduce((f,g) => (...args) => f(g(...args)));

const sayGrettingFor = (name) => composeStruct(toUpper, finish, pharese, greeting)(name);

const recebe = sayGrettingFor('Higor Diego');




