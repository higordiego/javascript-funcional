const { isPrice, price } = require('./index')

const cars = [
  { brand: 'Corsa', plate: 'PLC-3545', price: 3000 },
  { brand: 'Corsa', plate: 'PN0-3555', price: 5000 },
  { brand: 'Corsa', plate: 'PR0-3423', price: 5000 }
]

price(isPrice, cars)
