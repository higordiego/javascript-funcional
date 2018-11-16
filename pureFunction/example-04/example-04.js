const cars = [
  { brand: 'Corsa', plate: 'PLC-3545' },
  { brand: 'Fiat', plate: 'PNO-3545' },
  { brand: 'Corsa', plate: 'PR0-3545' },
]

cars.map((value, index) => value.brand)

const brand = car => car.brand

const byBrands = (fn, list) => list.map(fn)

byBrands(brand, cars)


// example live https://jsonplaceholder.typicode.com/users
