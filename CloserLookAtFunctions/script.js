'use strict';

const bookings = []
const createBooking = function(flightNum, numPassengers, price){
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking)
    bookings.push(booking)
}

createBooking('KLM123')


const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase()
}

const upperFirstWord = function(str){
    const[first, ...others] = str.split(' ')
    return [first.toUpperCase(), ...others].join(' ')
}

console.log(oneWord("Chris is getting the new q8"))
console.log(upperFirstWord('Chris might actually get the sq7'))


const transformer = function(str, fn){
    console.log(`Transformed string: ${fn(str)}`)
}
transformer('should i really', oneWord)
transformer('should i really', upperFirstWord)


const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`)
    }
}

greet("Hello")("Jonas")

const greeterHey = greet('Heeeey')
greeterHey('Broo')

const greet2 = (greeting2) => {
    return (name2) => {
        console.log(`${greeting2} ${name2}`)
    }
}
greet2("Mbogi")('Genje')

const greet3 = greeting3 => name3 => console.log(`${greeting3} ${name3}`)

greet3("Bret")("carie")


const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNumber, name){
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`
        )
        this.bookings.push({flight: `${this.iataCode}${flightNumber}`, name})
    }
}

lufthansa.book(619, "JohnSmith")
console.log(lufthansa)

const dutch = {
    airline: 'KLM',
    iataCode: "dutchKLM",
    bookings: []
}
const book = lufthansa.book

book.call(dutch, 889, "Jidraph")
console.log(dutch)

const flightData = [909, 'George Cooper']
book.apply(dutch, flightData)
console.log(dutch)