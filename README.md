# Advent of Code Solutions

This repo contains my solutions to Advent of Code Challenge. I'm posting these publicly to show my progression in completeing a challenge like this. I first started with this challenge in 2022 and decided that I will also complete the others as time permits.

![Cover](./cover.png)

My solutions will be completed in Javascript as much as I can. Due to my career and hobbies I'm not competing for best score or time as I'm looking to just have fun and learn along the way. With the inception of ChatGPT, I am not allowing myself to use it or any other AI tool to complete this. I'm am only allowing myself to use JS docs, stackoverflow, and other online forums.

## My Leaderboard (2024)

|     | Part 1   |       |       | Part 2   |       |       |
| :-: | -------- | ----- | :---: | -------- | ----- | :---: |
| Day | Time     | Rank  | Score | Time     | Rank  | Score |
|  1  | 17:45:20 | 95128 |   0   | 18:02:14 | 89915 |   0   |

## My Leaderboard (2023)

|     | Part 1 |        |       | Part 2 |        |       |
| :-: | ------ | ------ | :---: | ------ | ------ | :---: |
| Day | Time   | Rank   | Score | Time   | Rank   | Score |
|  1  | >24h   | 318801 |   0   | >24h   | 239909 |   0   |
|  2  | >24h   | 214270 |   0   | >24h   | 204193 |   0   |

## My Leaderboard (2022)

|     | Part 1   |        |       | Part 2   |        |       |
| :-: | -------- | ------ | :---: | -------- | ------ | :---: |
| Day | Time     | Rank   | Score | Time     | Rank   | Score |
|  1  | 20:46:29 | 122810 |   0   | 20:58:12 | 118047 |   0   |
|  2  | 21:01:42 | 117504 |   0   | 21:24:58 | 111634 |   0   |
|  3  | 09:25:32 | 61985  |   0   | 10:18:14 | 59323  |   0   |
|  4  | 09:44:47 | 65676  |   0   | 10:07:45 | 64958  |   0   |
|  5  | 01:18:57 | 13922  |   0   | 01:25:25 | 13251  |   0   |
|  6  | 00:11:57 | 7480   |   0   | 00:15:30 | 7646   |   0   |
|  7  | >24h     | 116387 |   0   | 00:15:30 | 113762 |   0   |

## My Leaderboard (2015)

|     | Part 1 |       |       | Part 2 |       |       |
| :-: | ------ | ----- | :---: | ------ | ----- | :---: |
| Day | Time   | Rank  | Score | Time   | Rank  | Score |
|  1  | >24h   | 85283 |   0   | >24h   | 69785 |   0   |
|  2  | >24h   | 54552 |   0   | >24h   | 49184 |   0   |

## Setup & Execution

The solutions are broken out in folders by the days. I'm developing the solutions by running the javascript file in Nodemon, this way it auto runs upon saving.

Each day I login to the [Advent of Code](https://adventofcode.com) and get the input file and save it to the same folder.

```bash
# Node.js
npm install
node ./<year>/day-<day number>
```

## Development Mode

I initially develop the code to solve the example problem and then build it out from there. To enable faster switching between the real/fake datasets, I added the `-dev` flag. Simply place it at the end of the run command and it will output if the result is correct. This is helpful for refactoring it in the event I learn some new trick and I want to make sure I don't leave it broken.

```bash
# Development mode (Requires Nodemon )
npm i -g nodemon

nodemon ./<year>/day-<day number> -dev
```
