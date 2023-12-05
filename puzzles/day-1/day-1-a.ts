import { readData } from '../../shared.ts';
import chalk from 'chalk';

export async function day1a(dataPath?: string): Promise<number> {
  const data = await readData(dataPath);
  console.log(data);
  return data.map(findNum)
      .reduce((a,b) => a+b, 0)
}

function findNum(line: string): number {
  let substr: string = '';
  for (let i of line.split('')) {
    if(isNumeric(i)){
      substr += i;
    }
  }
  return Number(substr.charAt(0) + substr.charAt(substr.length - 1));
}

const isNumeric = (val: string | number) : boolean => {
  return ((val !=null) &&
          (val !== '') &&
          !isNaN(Number(val)));
}

const answer = await day1a();
console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));
