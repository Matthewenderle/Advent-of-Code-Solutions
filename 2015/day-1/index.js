// https://adventofcode.com/2015/day/1
import fs from 'fs'

const data = fs.readFileSync('./2015/day-1/input.txt').toString().split('')

const part1 = () => {
    return data.map((x) => x = x == '(' ? 1 : -1).reduce((a, c) => a + c)
}

const part2 = () => {
    let floors = data.map((x) => x = x == '(' ? 1 : -1)
    let floor = 0
    let position = []
    floors.forEach((x, i) => {
        floor += x
        if (floor < 0)
            position.push(i + 1)
    })
    return position
}

const part1Result = part1();
const part2Result = part2()[0];


console.log(`Part 1: The floor Santa 🎅 ends up on is Floor ${part1Result}.`)
console.log(`Part 2: Santa first visited the basement on trip ${part2Result}.`)


