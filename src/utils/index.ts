export const intersection = (first: number[], second: number[]): number[] =>
  first.filter((item) => second.indexOf(item) !== -1);

export const exclude = (first: number[], second: number[]): number[] =>
  first.filter((item) => second.indexOf(item) === -1);
