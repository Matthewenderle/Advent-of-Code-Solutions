// https://adventofcode.com/2022/day/2
import { getDataFile } from "../../utils/file.js"
const devMode = process.argv.includes('-dev')
const data = getDataFile(2, devMode)

const dataArray = []

data.forEach((x) => {
  dataArray.push(x.split(' '))
})

const points = {
  // Rock
  A: {
    X: { part1: 4, part2: '3' }, // lose
    Y: { part1: 8, part2: '4' }, //X draw
    Z: { part1: 3, part2: '8' }  // win
  },
  // Paper
  B: {
    X: { part1: 1, part2: '1' }, //X lose
    Y: { part1: 5, part2: '5' }, // draw
    Z: { part1: 9, part2: '9' }  // win
  },
  // Scisors
  C: {
    X: { part1: 7, part2: '2' }, // lose
    Y: { part1: 2, part2: '6' }, // draw
    Z: { part1: 6, part2: '7' }  //X win
  }
}

const getScore = (a, b, part) => {
  const score = points[a]
  return score[`${b}`][part]
}

const part1 = dataArray.map((e) => {
  e.score = getScore(e[0], e[1], 'part1');
  return e;
});

let part1ScoreSum = 0

part1.forEach((x) => {
  part1ScoreSum += Number(x.score)
})



const part2 = dataArray.map((e) => {
  e.score = getScore(e[0], e[1], 'part2');
  return e;
});

let part2ScoreSum = 0

part2.forEach((x) => {
  part2ScoreSum += Number(x.score)
})

console.log(`Part 1: Your score for 🪨 📃✂️  is: ${part1ScoreSum}`)
console.log(`Part 2: Your score for 🪨 📃✂️  is: ${part2ScoreSum}`)

if (devMode) {
  console.log(part1ScoreSum !== 15 ? `❌ Part 1: ${part1ScoreSum} != 15` : `✅ Part 1: is correct 🌟`)
  console.log(part2ScoreSum !== 12 ? `❌ Part 2: ${part2ScoreSum} != 12` : `✅ Part 2: is correct 🌟`)
}