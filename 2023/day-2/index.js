// https://adventofcode.com/2023/day/2
import fs from 'fs';

const devMode = process.argv.includes('-dev') ? '-dev' : '';
let t = devMode ? process.hrtime() : null;
const lines = fs.readFileSync(`./2023/day-2/input${devMode}.txt`).toString().split('\n');

const part1 = () => {
  lines.pop();

  const cubeMax = {
    red: 12,
    green: 13,
    blue: 14,
  };

  // Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
  const blockRegex = /(\d+)\s(\w+)?/g;
  const games = [];
  const gameIds = new Set();

  lines.forEach((line, index) => {
    const blocks = line.match(blockRegex);
    let possible = true;

    blocks.map((x) => {
      if (possible === false) return false;
      const [amount, color] = x.split(' ');

      if (cubeMax[color] < Number(amount)) {
        possible = false;
      }
    });

    if (possible) {
      gameIds.add(index + 1);
    } else {
      gameIds.delete(index + 1);
    }

    games.push(possible);
  });

  let result = 0;
  gameIds.forEach((value) => {
    result += value;
  });

  return result;
};

const part2 = () => {
  const blockRegex = /(\d+)\s(\w+)?/g;
  const powers = [];

  lines.forEach((line, index) => {
    const blocks = line.match(blockRegex);

    const blockMax = {
      red: 0,
      green: 0,
      blue: 0,
    };

    blocks.map((x) => {
      const [amount, color] = x.split(' ');

      if (blockMax[color] < parseInt(amount)) {
        blockMax[color] = parseInt(amount);
      }
    });

    powers.push(blockMax.red * blockMax.green * blockMax.blue);
  });

  return powers.reduce((accumulator, currentValue) => accumulator + currentValue);
};

const part1Result = part1();
const part2Result = part2();

if (devMode) {
  const part1Expected = 8;
  const part2Expected = 2286;
  console.log(
    part1Result !== part1Expected ? `❌ Part 1: ${part1Result} != ${part1Expected}` : `✅ Part 1: is correct 🌟`,
  );
  console.log(
    part2Result !== part2Expected ? `❌ Part 2: ${part2Result} != ${part2Expected}` : `✅ Part 2: is correct 🌟`,
  );
  t = process.hrtime(t);
  console.log('benchmark took %d seconds and %d nanoseconds', t[0], t[1]);
} else {
  console.log(`Part 1: The sum of all of the game IDs is: ${part1Result}`);
  console.log(`Part 2: The sum of the power of the sets is: ${part2Result}`);
}
