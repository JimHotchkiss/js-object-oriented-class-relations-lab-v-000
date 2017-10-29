store = {drivers: [], passengers: [], trips: []}

let driverId = 0
class Driver {
  constructor(name) {
    this.id = ++driverId;
    this.name = name;

    // insert in the driver to the store
    store.drivers.push(this)
  }
  trips() {
    return store.trips.filter(trip => {
      return trip.driverId = this.id
    })
  }
  // returns all the passengers a drivers taken on trip
  passengers() {
    return store.passengers.filter(passenger => {
      return passenger.driverId = this.id
    })
  }
}



let passengerId = 0
class Passenger {
  constructor(name) {
    this.id = ++passengerId;
    this.name = name;

    // insert in the passenger to the store
    store.passengers.push(this)
  }
  trips() {
    return store.trips.filter(trip =>{
      return trip.passengerId = this.id
    })
  }
  drivers() {
    return store.drivers.filter(driver =>{
      return driver.passengerId = this.id
    })
  }
}


let tripId = 0
class Trip {
  constructor(passenger, driver) {
    this.id = ++tripId;
    this.passengerId = passengerId;
    this.driverId = driverId;

    store.trips.push(this)
  }
// this makes sense to use .find, because a trip is only going to have one driver and one passenger, and .find finds the first example
  driver() {
    return store.drivers.find((driver) => { return driver.id === this.driverId})
  }
  passenger() {
    return store.passengers.find((passenger) => { return passenger.id === this.passengerId})
  }
}
