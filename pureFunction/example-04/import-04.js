const { byBrands, brand } = require('./index')


const cars = [
  { brand: 'Corsa', plate: 'PLC-3545' },
  { brand: 'Fiat', plate: 'PNO-3545' },
  { brand: 'Corsa', plate: 'PR0-3545' },
]

byBrands(brand, cars)
