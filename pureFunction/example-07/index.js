module.expors.returnObject = current => {
  return {
    brand: current.brand,
    plate: current.plate,
    price: current.price,
    multi: (current.dificulty * current.price)
  }
}
