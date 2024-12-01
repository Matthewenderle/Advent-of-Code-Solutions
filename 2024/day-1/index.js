// https://adventofcode.com/2024/day/1
import fs from 'fs';

const devMode = process.argv.includes('-dev') ? '-dev' : '';
let t = devMode ? process.hrtime() : null;

const input1 = fs
  .readFileSync(`./2024/day-1/input${devMode}.txt`)
  .toString()
  .split('\n')
  .filter((line) => line.trim() !== '');

const seperateLists = () => {
  const listA = [];
  const listB = [];

  input1.map((line) => {
    const [a, b] = line.split('   ');
    listA.push(a);
    listB.push(b);
  });

  const sortedListA = listA.sort((a, b) => a - b);
  const sortedListB = listB.sort((a, b) => a - b);
  return { listA: sortedListA, listB: sortedListB };
};

const part1 = () => {
  const { listA, listB } = seperateLists();

  const distances = [];
  for (let i = 0; i < listA.length; i++) {
    distances.push(Math.abs(listA[i] - listB[i]));
  }

  const distance = distances.reduce((acc, curr) => acc + curr, 0);
  return distance;
};

const part2 = () => {
  const { listA, listB } = seperateLists();
  const similarities = [];

  listA.forEach((a, i) => {
    const numFound = listB.filter((b) => b === a).length;
    similarities.push(a * numFound);
  });

  const similaritiesSum = similarities.reduce((acc, curr) => acc + curr, 0);
  return similaritiesSum;
};

const part1Result = part1();
const part2Result = part2();

if (devMode) {
  const part1Expected = 11;
  const part2Expected = 31;
  console.log(
    part1Result !== part1Expected ? `❌ Part 1: ${part1Result} != ${part1Expected}` : `✅ Part 1: is correct 🌟`,
  );
  console.log(
    part2Result !== part2Expected ? `❌ Part 2: ${part2Result} != ${part2Expected}` : `✅ Part 2: is correct 🌟`,
  );
  t = process.hrtime(t);
  console.log('benchmark took %d seconds and %d nanoseconds', t[0], t[1]);
} else {
  console.log(`Part 1: The sum of all of the distance values are: ${part1Result}`);
  console.log(`Part 2: The sum of all of the calibration values is: ${part2Result}`);
}
