// https://adventofcode.com/2022/day/1
const fileUtil = require('../../fileUtil')  
const data = fileUtil.syncReadFile('./days/1/input.txt')

let elfs = []
let calorieSum = 0

data.forEach((x) => {
    if (x !== '') {
        calorieSum += Number(x)
    } else {
        elfs.push(calorieSum)
        calorieSum = 0
    }
})

console.log(`Part 1: The 🧝 with the most 🍔 is number: ${elfs.indexOf(Math.max(...elfs))} and is carrying ${Math.max(...elfs)} calories.`)

const orderedElfs = elfs.sort((a, b) => b - a)

console.log(`Part 2: The combined total of the top three🧝's calories are: ${orderedElfs.slice(0,3).reduce(
    (accumulator, currentValue) => accumulator + currentValue
  )}.`)
