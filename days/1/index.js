// https://adventofcode.com/2022/day/1
import { getDataFile } from "../../utils/file.js"
const devMode = process.argv.includes('-dev')
let t = devMode ? process.hrtime() : null;
const data = getDataFile(1, devMode)

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

const totalCalories = Math.max(...elfs)
const orderedElfs = [...elfs].sort((a, b) => b - a)
const groupCalories = orderedElfs.slice(0, 3).reduce(
    (accumulator, currentValue) => accumulator + currentValue
)


if (devMode) {
    console.log(totalCalories !== 24000 ? `❌ Part 1: ${totalCalories} != 24000` : `✅ Part 1: is correct 🌟`)
    console.log(groupCalories !== 45000 ? `❌ Part 2: ${groupCalories} != 45000` : `✅ Part 2: is correct 🌟`)
    t = process.hrtime(t)
    console.log('benchmark took %d seconds and %d nanoseconds', t[0], t[1]);
} else {
    console.log(`Part 1: The 🧝s are carrying ${totalCalories} calories.`)
    console.log(`Part 2: The combined total of the top three🧝's calories are: ${groupCalories}.`)
}

