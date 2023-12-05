import { readData, splitStringIntoPair } from '../../shared.ts';
import chalk from 'chalk';

export async function day2b(dataPath?: string) {
  const data = await readData(dataPath);
  console.log(data);
  return data.map(getMinCubeSet)
              .reduce((a,b) => a + b, 0);
}

interface Bag {
  red: number;
  blue: number;
  green: number;
}

//Solution for this is to find the max value for each color

function getMinCubeSet(line: string): number {
  let bag: Bag = {
    red: 0,
    blue: 0,
    green: 0,
  };

  let [game, drawString] = splitStringIntoPair(line, ': ');
  let [, gameId] = splitStringIntoPair(game);

  let draws = drawString.split('; ');
  for(let draw of draws) {
    let cubes = draw.split(', ');
    for(let cube of cubes) {
      let [num, color] = splitStringIntoPair(cube)
      if(Number(bag[color]) < Number(num)) {
        bag[color] = Number(num);
      }
    }
  }
  console.log(bag)
  return bag["red"]*bag["blue"]*bag["green"];
}

const answer = await day2b();
console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));