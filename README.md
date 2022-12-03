# Advent of Code 2022

This repo contains my solutions to the 2022 season's for the Advent of Code Challenge. I'm posting these publicly to show my progression in completeing a challenge like this. 

![Cover](./cover.png)

My solutions will be completed in Javascript as much as I can. Due to my career and hobbies I'm not competing for best score or time, just completion and consistancy.

## My Leaderboard
|      |  Part 1  |        |     |  Part 2  |        |     |
| :---:|----------|--------|:---:|----------|--------|:---:|
|  Day |   Time   |  Rank  |Score|   Time   |  Rank  |Score|
|  1   | 20:46:29 | 122810 |  0  | 20:58:12 | 118047 |  0  |
|  2   | 21:01:42 | 117504 |  0  | 21:24:58 | 111634 |  0  |
|  3   | 09:25:32 | 61985  |  0  | 10:18:14 | 59323  |  0  |


## Setup & Execution

The solutions are broken out in folders by the days. I'm developing the solutions by running the javascript file in Nodemon, this way it auto runs upon saving.

Each day I login to the [Advent of Code](https://adventofcode.com) and get the input file and save it to the same folder.

```bash
# Node.js v18.12.1
npm install
node ./days/<day number>

# Development mode (Requires Nodemon v2.0.20)
nodemon ./days/<day number>
```

## Development Mode

I initially develop the code to solve the example problem and then build it out from there. To enable faster switching between the real/fake datasets, I added the `-dev` flag. Simply place it at the end of the run command and it will output if the result is correct. This is helpful for refactoring it in the event I learn some new trick and I want to make sure I don't leave it broken.

```bash
# Development mode (Requires Nodemon v2.0.20)
nodemon ./days/<day number> -dev
```