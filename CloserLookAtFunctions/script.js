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
