// https://adventofcode.com/2022/day/4
import { getDataFile } from "../../utils/file.js"
const devMode = process.argv.includes('-dev')
let t = devMode ? process.hrtime() : null;
const data = getDataFile(2022, 4, devMode)

const makePairs = (input) => {
  const pairs = input.map((x, i) => x.split(','))
  return pairs.map((x) => [x[0].split('-'), x[1].split('-')])
}

const pairs = makePairs(data)

const range = (start, end) => [...[...Array(end - start + 1).keys()].map(i => i + Number(start))]
const getIntersection = (a, ...arr) => [...new Set(a)].filter((v) => arr.every((b) => b.includes(v)));
const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

const part1 = (pairs) => {
  let overlaps = 0
  for (let i = 0; i < pairs.length; i++) {
    const leftRange = range(pairs[i][0][0], pairs[i][0][1])
    const rightRange = range(pairs[i][1][0], pairs[i][1][1])
    const intersection = getIntersection(leftRange, rightRange)
    overlaps += isEqual(intersection, leftRange) || isEqual(intersection, rightRange) ? 1 : 0
  }
  return overlaps
}

const part2 = (pairs) => {
  let overlaps = 0
  for (let i = 0; i < pairs.length; i++) {
    const leftRange = range(pairs[i][0][0], pairs[i][0][1])
    const rightRange = range(pairs[i][1][0], pairs[i][1][1])
    overlaps += getIntersection(leftRange, rightRange).length > 0 ? 1 : 0
  }
  return overlaps
}

const part1Result = part1(pairs)
const part2Result = part2(pairs)


if (devMode) {
  console.log(part1Result !== 2 ? `❌ Part 1: ${part1Result} != 2` : `✅ Part 1: is correct 🌟`)
  console.log(part2Result !== 4 ? `❌ Part 2: ${part2Result} != 4` : `✅ Part 2: is correct 🌟`)
  t = process.hrtime(t)
  console.log('benchmark took %d seconds and %d nanoseconds', t[0], t[1]);
} else {
  console.log(`Part 1: The number of overlapped assignments is: ${part1Result}`)
  console.log(`Part 2: The number of absolute overlapped assignments is: ${part2Result}`)
}
