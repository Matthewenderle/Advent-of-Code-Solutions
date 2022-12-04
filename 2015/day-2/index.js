// https://adventofcode.com/2015/day/2
import fs from 'fs'
const data = fs.readFileSync('./2015/day-2/input.txt').toString().split('\r\n')

let boxes = []

data.forEach((x, i) => {
    boxes.push(x.split('x').sort((a, b) => a - b))
})

const part1 = () => {
    let area = 0
    boxes.forEach((x, i) => {
        // console.log(x, ((x[0] * x[1]) * 2) + ((x[0] * x[2]) * 2) + ((x[1] * x[2]) * 2)) + (x[0] * x[1])
        area += ((x[0] * x[1]) * 2) + ((x[0] * x[2]) * 2) + ((x[1] * x[2]) * 2) + (x[0] * x[1])
    })
    return area
}

const part2 = () => {
    let ribbon = 0
    boxes.forEach((x, i) => {
        // console.log(x, (x[0] * 2) + (x[1] * 2) + (x[0] * x[1] * x[2]))
        ribbon += (x[0] * 2) + (x[1] * 2) + (x[0] * x[1] * x[2])
    })
    return ribbon
}

const part1Result = part1();
const part2Result = part2();


console.log(`Part 1: The Elfs need ${part1Result} sqft of wrapping paper.`)
console.log(`Part 2: They also need ${part2Result} feet of Ribbon.`)


