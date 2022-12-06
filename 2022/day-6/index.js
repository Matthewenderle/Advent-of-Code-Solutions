// https://adventofcode.com/2022/day/6
import fs from 'fs'
const devMode = process.argv.includes('-dev')
let t = devMode ? process.hrtime() : null;
let input = fs.readFileSync('./2022/day-6/input.txt').toString().split('')

const part1 = () => {
  let result = 0
  const packetSize = 4
  input.forEach((x,i) => {
    const arr = input.slice(i, (i+1) * packetSize)
    const set = new Set(arr).size !== arr.length
    if (!set && result === 0)
      result = i + packetSize
})
  return result
}

const part2 = () => {
  let result = 0
  const packetSize = 14
  input.forEach((x,index) => {
    const arr = input.slice(index, (index+1) * packetSize)
    const set = new Set(arr).size !== arr.length
    if (!set && result === 0)
      result = index + packetSize
})
  
  return result
}

const part1Result = part1()

const part2Result = part2()


if (devMode) {
  const part1 = 1953 // BWNCQRMDB || CMZ
  const part2 = 2301 // NHWZCBNBF || MCD
  console.log(part1Result !== part1 ? `❌ Part 1: ${part1Result} != ${part1}` : `✅ Part 1: is correct 🌟`)
  console.log(part2Result !== part2 ? `❌ Part 2: ${part2Result} != ${part2}` : `✅ Part 2: is correct 🌟`)
  t = process.hrtime(t)
  console.log('benchmark took %d seconds and %d nanoseconds', t[0], t[1]);
} else {
  console.log(`Part 1: The packet starts at: ${part1Result}`)
  console.log(`Part 2: The message starts at: ${part2Result}`)
}
