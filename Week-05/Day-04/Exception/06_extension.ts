'use strict';

export function add(a: number, b: number): number {
  return a + b;
}

export function maxOfThree(a: number, b: number, c: number): number {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  }
  return c;
};

export function median(pool: number[]): number {
  return pool.sort()[Math.floor((pool.length - 1) / 2)];
}

export function isVowel(character: string): boolean {
  return ['a', 'u', 'o', 'e', 'i'].some(vowel => vowel === character.toLowerCase());
}

export function translate(hungarian: string): string {
  let teve = hungarian.split('');
  teve.forEach((e, i) => {
    if (isVowel(e)) {
      teve.splice(i, 1, `${e}v${e}`)
    }
  });
  return teve.join('');
}
