// This is the link to this JavaScript Challenge
// https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript

function findNextSquare(sq) {
    if(Number.isInteger(Math.sqrt(sq)) == true){
        num = Math.sqrt(sq) + 1
        nextpsq = num * num
        console.log(`The next perfect square of ${sq} is ${nextpsq}`)
    } else {
        return console.log(-1)
    }
}
findNextSquare(121)
console.log('========')
findNextSquare(114)
console.log('========')
findNextSquare(625)