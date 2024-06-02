// https://adventofcode.com/2023/day/1
import fs from 'fs';

const devMode = process.argv.includes('-dev') ? '-dev' : '';
let t = devMode ? process.hrtime() : null;
const lines = fs.readFileSync(`./2023/day-1/input${devMode}.txt`).toString().split('\n');
const lines2 = fs
  .readFileSync(`./2023/day-1/input${devMode}${devMode ? '-2' : ''}.txt`)
  .toString()
  .split('\n');

const part1 = () => {
  lines.pop();

  let sum = 0;

  lines.forEach((line) => {
    let first = null;
    let last = null;

    line.split('').forEach((x) => {
      if (!isNaN(parseInt(x)) && !first) first = parseInt(x);
      if (!isNaN(parseInt(x))) last = parseInt(x);
    });
    sum += first * 10 + last;
  });

  return sum;
};

const part2 = () => {
  lines2.pop();
  let sum = 0;

  const numbers = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const textualNumber = (cursor) => {
    return numbers[cursor] || false;
  };

  let lineIndex = 0;

  while (lineIndex < lines2.length) {
    const line = lines2[lineIndex].split('');
    // console.log(line.join(''));

    let begining = 0;
    let foundFirst = false;
    let first = 0;
    let last = 0;

    while (begining < line.length+1) {
      let pointer = 1;
      while (pointer < line.length + 1) {
        // console.log(lineIndex, begining, pointer, first, last, line.slice(begining, pointer).join(''));

        const int = !isNaN(parseInt(line.slice(begining, pointer).join('')));

        if (int) {
          // console.log('A', begining, pointer, first, last, parseInt(line.slice(begining, pointer).join('')));
          if (!foundFirst) {
            foundFirst = true;
            first = parseInt(line.slice(begining, pointer).join(''));
            begining++;
          } else {
            last = parseInt(line.slice(begining, pointer).join(''));
            begining++;
          }
        } else {
          const word = line.slice(begining, pointer).join('');
          const num = textualNumber(word);
          if (num) {
            if (!foundFirst) {
              first = num
              foundFirst =true
            }
            else last = num
            begining++;
          }
        }

        if (first && last && pointer === line.length  && begining === line.length) {
          // console.log(line.join(''), begining, pointer, first, last, first * 10 + last);
          // console.log(line.join(''),  first * 10 + last);
        }
        if ((!first || !last) && pointer === line.length  && begining === line.length) {
          // console.log(line.join(''), begining, pointer, first, last, first * 10 + last);
          // console.log(line.join(''),  (first || last)*10 + (first || last));
          first = (first || last)
          last = (first || last)
        }
        pointer++;
      }
      begining++;
    }

    lineIndex++;
    
    sum += first * 10 + last;
  }

  return sum;
};

const part1Result = part1();
const part2Result = part2();

if (devMode) {
  const part1Expected = 142;
  const part2Expected = 281;
  console.log(
    part1Result !== part1Expected ? `❌ Part 1: ${part1Result} != ${part1Expected}` : `✅ Part 1: is correct 🌟`,
  );
  console.log(
    part2Result !== part2Expected ? `❌ Part 2: ${part2Result} != ${part2Expected}` : `✅ Part 2: is correct 🌟`,
  );
  t = process.hrtime(t);
  console.log('benchmark took %d seconds and %d nanoseconds', t[0], t[1]);
} else {
  console.log(`Part 1: The sum of all of the calibration values is: ${part1Result}`);
  console.log(`Part 2: The sum of all of the calibration values is: ${part2Result}`);
}
