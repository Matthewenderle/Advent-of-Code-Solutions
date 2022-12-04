// https://adventofcode.com/2022/day/3
import { getDataFile } from "../../utils/file.js"
const devMode = process.argv.includes('-dev')
let t = devMode ? process.hrtime() : null;
const data = getDataFile(2022, 3, devMode)

//              0    1    2    3    4    5    6    7    8    9    10   11   12   13   14   15   16   17   18   19   20   21   22   23   24   25
const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const getMatchingCharIndex = (array) => {
  const len = array.length
  let index = []
  array[0].filter(x => {
    let i = 2
    if (array[1].includes(x)) {
      if (len == 2) {
        index[0] = x
        index[1] = Number(chars.includes(x) ? chars.indexOf(x) : chars.indexOf(x.toLowerCase()) + 26)
      } else {
        do {
          if (array[i].includes(x)) {
            index[0] = x
            index[1] = Number(chars.includes(x) ? chars.indexOf(x) : chars.indexOf(x.toLowerCase()) + 26)
          }
          i += 1
        } while (i <= len - 1)
      }
    }
  })
  return index
}

const part1 = () => {
  let prioritySum = 0

  data.forEach((x) => {
    const length = x.length
    const parts = []
    parts[0] = [...new Set(x.slice(0, length / 2))]
    parts[1] = [...new Set(x.slice(length / 2, length))]

    const match = getMatchingCharIndex(parts)
    prioritySum += match[1] + 1
  })
  return prioritySum
}

const part2 = () => {

  let groups = []
  let group = []
  let i = 0

  data.forEach((x) => {
    i += 1
    group.push(x)
    if (i >= 3) {
      groups.push(group)
      group = []
      i = 0
    }
  })

  let prioritySum = 0
  groups.forEach((group) => {
    const elfs = []
    elfs[0] = [...new Set(group[0])]
    elfs[1] = [...new Set(group[1])]
    elfs[2] = [...new Set(group[2])]

    const match = getMatchingCharIndex(elfs)
    prioritySum += match[1] + 1
  })
  return prioritySum
}

const part1Result = part1()
const part2Result = part2()


if (devMode) {
  console.log(part1Result !== 157 ? `❌ Part 1: ${part1Result} != 157` : `✅ Part 1: is correct 🌟`)
  console.log(part2Result !== 70 ? `❌ Part 2: ${part2Result} != 70` : `✅ Part 2: is correct 🌟`)
  t = process.hrtime(t)
  console.log('benchmark took %d seconds and %d nanoseconds', t[0], t[1]);
} else {
  console.log(`Part 1: The sum of the priority items is: ${part1Result}`)
  console.log(`Part 2: The sum of the priority items per group is: ${part2Result}`)
}