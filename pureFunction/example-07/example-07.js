

const cars = [
  { brand: 'Corsa', plate: 'PLC-3545', price: 3000, dificulty: 2.0 },
  { brand: 'Corsa', plate: 'PN0-3555', price: 5000, dificulty: 3.0 },
  { brand: 'Corsa', plate: 'PR0-3423', price: 5000, dificulty: 4.0 }
]


cars.reduce((previous, current) => {
  return previous.concat.push({
    brand: current.brand,
    plate: current.plate,
    price: current.price,
    multi: (current.dificulty * current.price)
  })
}, [])


const returnObject = current => {
  return {
    brand: current.brand,
    plate: current.plate,
    price: current.price,
    multi: (current.dificulty * current.price)
  }
}


// example live code
// https://jsonplaceholder.typicode.com/users
