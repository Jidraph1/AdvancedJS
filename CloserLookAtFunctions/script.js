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

const bookKLM = book.bind(dutch)
bookKLM(23, "TwennyOne")

lufthansa.planes = 300;
lufthansa.buyPlane = function(){
    console.log(this)
    this.planes++
    console.log(this.planes)
}

document.querySelector('.buy')
.addEventListener('click', lufthansa.buyPlane
.bind(lufthansa))


const addTax = function(rate, value){
    return value + value * rate
}
console.log(addTax(0.1, 300))


const addTax2 = (rate2, value2) =>  value2 + value2 * rate2;
console.log(addTax2(0.2, 100))

const addVat = addTax.bind(null, 0.23)

console.log(addVat(100))


const addTaxRate = function(rate){
return function(value){
    return value + value * rate 
}
}

// Create a prompt

const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: Javascript', '1: Python', '2: Rust', '3: C'],
    answers: new Array(4).fill(0),
    registerNewAnswer (){
        const answer = Number(prompt(`${this.question}\n${this.options.join('\n')} \n(Write option Number)`))
        console.log(answer)
// Register the value
        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++
        // console.log(this.answers)
        this.displayResults()
        this.displayResults('string')
     },

     displayResults(type = 'array'){
         if (type === 'array'){
             console.log(this.answers) 
         } else if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`)
     }
     }
    }



// poll.registerNewAnswer()

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll))
