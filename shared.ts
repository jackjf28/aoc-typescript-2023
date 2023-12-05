import { type } from 'arktype'
import { readFile } from 'fs/promises';

export async function readData(path?: string) {
  const fileName = path || process.argv[2];
  const data = (await readFile(fileName)).toString().split('\n');
  return data;
}

// credit: https://github.com/AlexAegis/advent-of-code/blob/master/solutions/typescript/libs/lib/src/string/split-into-tuple.function.ts#L3
export const splitStringIntoPair = (s: string, delimeter?: string | RegExp): [string, string] => {
  return type(['string', 'string']).assert(s.split(delimeter ?? ' '));
}