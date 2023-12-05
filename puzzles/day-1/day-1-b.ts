import { readData } from '../../shared.ts';
import chalk from 'chalk';

// Credit for this solution: https://github.com/AlexAegis/advent-of-code/blob/master/solutions/typescript/2023/01/src/p2.ts

const nums = {
  one: '1',
  '1': '1',
  two: '2',
  '2': '2',
  three: '3',
  '3': '3',
  four: '4',
  '4': '4',
  five: '5',
  '5': '5',
  six: '6',
  '6': '6',
  seven: '7',
  '7': '7',
  eight: '8',
  '8': '8',
  nine: '9',
  '9': '9'
}

const numbersAsKeys = Object.keys(nums) as (keyof typeof nums)[];

export async function day1b(dataPath?: string) {
  const data = await readData(dataPath);
  return data.map(findNum)
     .reduce((a,b) => a+b, 0);
}

function findNum(line: string): number {
//  let substr: string = '';
//  for (let i of line.split('')) {
//    if(isNumeric(i)){
//      substr += i;
//    }
//  }
//  return Number(substr.charAt(0) + substr.charAt(substr.length - 1));
  let firstDigit: string | undefined;
  let lastDigit: string | undefined;
  for(let i = 0; i < line.length; i++) {
    if (firstDigit === undefined) {
      let possibleFirstNumber = line.slice(i, i+5);
      let firstTextNumber = numbersAsKeys.find((key) => 
          possibleFirstNumber.startsWith(key));

      if (firstTextNumber) {
        firstDigit = nums[firstTextNumber];
      }
    }

    if (lastDigit === undefined) {
      let possibleLastNumber = line.slice(Math.max(line.length - i - 5, 0), line.length - i);
      let lastTextNumber = numbersAsKeys.find((key) => 
          possibleLastNumber.endsWith(key));

      if (lastTextNumber) {
        lastDigit = nums[lastTextNumber];
      }
    }

    if (firstDigit !== undefined && lastDigit !== undefined) {
      break;
    }
  }
  return Number((firstDigit ?? '') + (lastDigit ?? ''));
}

//const isNumeric = (val: string | number) : boolean => {
//  return ((val !=null) &&
//          (val !== '') &&
//          !isNaN(Number(val)));
//}

const answer = await day1b();
console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));
