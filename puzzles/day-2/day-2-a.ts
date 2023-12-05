import internal from 'stream';
import { readData } from '../../shared.ts';
import chalk from 'chalk';

const maxBag = {
  red: 12,
  green: 13,
  blue: 14,
}

//const colors = Object.keys(maxBag) as (keyof typeof maxBag)[];

export async function day2a(dataPath?: string) {
  const data = await readData(dataPath);
  console.log(data);
  return data.map(getPossibleGames)
            .reduce((a,b) => a + b, 0);
}

// Hides a secret number of cubes of each color in the bag
// Goal: Figure out info about # of cubes
// Game: Once bag is filled, elf reaches into bag, grabs handful of random cubes, shows you, and puts them back in bag. Repeat a few times per game
// Max values: 12 red, 13 green, 14 blue

function getPossibleGames(line: string): number {
  let [gameNum, bags] = line.split(':');
  let draws = bags.split(';');
  for (let draw of draws) {
    let cubes = draw.split(', ');
    for(let cube of cubes) {
      let [num, color] = cube.trim().split(' ');
      if (num > maxBag[color]) {
        return 0;
      }
    }
  }

  return Number(gameNum.split(' ')[1]);
}

const answer = await day2a();
console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));