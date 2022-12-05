// https://adventofcode.com/2022/day/5
import fs from 'fs'
const devMode = process.argv.includes('-dev')
let t = devMode ? process.hrtime() : null;
const commands = fs.readFileSync('./2022/day-5/commands.txt').toString().split('\r\n')

let stacks = [
  ['B', 'Q', 'C'],
  ['R', 'Q', 'W','Z'],
  ['B', 'M', 'R','L','V'],
  ['C', 'Z', 'H','V','T','W'],
  ['D', 'Z', 'H','B','N','V','G'],
  ['H', 'N', 'P','C','J','F','V','Q'],
  ['D', 'G', 'T','R','W','Z','S'],
  ['C', 'G', 'M','N','B','W','Z','P'],
  ['N', 'J', 'B','M','W','Q','F','P'],
]

// Dev Stack
// let stacks = [
//   ['Z', 'N'],
//   ['M', 'C', 'D'],
//   ['P'],
// ]

// 'move 1 from 2 to 1'
const part1 = () => {
  let result = ''
  commands.forEach((c) => {
    const command = c.split(',')
    const length = stacks[command[1] - 1].length;
    const payload = stacks[command[1] - 1].slice(-command[0], length).reverse()
    stacks[command[1] - 1] = stacks[command[1] - 1].slice(0, length - command[0])
    stacks[command[2] - 1] = stacks[command[2] - 1].concat(payload)
    //console.log(command[1], length, payload,'stacks:',stacks)
  })

  stacks.forEach((x) => {
    result += x[x.length-1]
  })

  // console.log(commands)
  // console.log(stacks)
  return result
}

const part2 = () => {
  let result = ''
  // console.log(stacks)

  commands.forEach((c) => {
    const command = c.split(',')
    const length = stacks[command[1] - 1].length;
    const payload = stacks[command[1] - 1].slice(-command[0], length)
    stacks[command[1] - 1] = stacks[command[1] - 1].slice(0, length - command[0])
    stacks[command[2] - 1] = stacks[command[2] - 1].concat(payload)
    // console.log(command[1], length, payload,'stacks:',stacks)
  })

  stacks.forEach((x) => {
    result += x[x.length-1]
  })

  // console.log(commands)
  // console.log(stacks)
  return result
}

const part1Result = part1()


stacks = [
  ['B', 'Q', 'C'],
  ['R', 'Q', 'W','Z'],
  ['B', 'M', 'R','L','V'],
  ['C', 'Z', 'H','V','T','W'],
  ['D', 'Z', 'H','B','N','V','G'],
  ['H', 'N', 'P','C','J','F','V','Q'],
  ['D', 'G', 'T','R','W','Z','S'],
  ['C', 'G', 'M','N','B','W','Z','P'],
  ['N', 'J', 'B','M','W','Q','F','P'],
]

// Dev Stack
// stacks = [
//   ['Z', 'N'],
//   ['M', 'C', 'D'],
//   ['P'],
// ]

const part2Result = part2()


if (devMode) {
  const part1 = 'BWNCQRMDB' // BWNCQRMDB || CMZ
  const part2 = 'NHWZCBNBF' // NHWZCBNBF || MCD
  console.log(part1Result !== part1 ? `❌ Part 1: ${part1Result} != ${part1}` : `✅ Part 1: is correct 🌟`)
  console.log(part2Result !== part2 ? `❌ Part 2: ${part2Result} != ${part2}` : `✅ Part 2: is correct 🌟`)
  t = process.hrtime(t)
  console.log('benchmark took %d seconds and %d nanoseconds', t[0], t[1]);
} else {
  console.log(`Part 1: The top boxes are: ${part1Result}`)
  console.log(`Part 2: The top boxes are: ${part2Result}`)
}
