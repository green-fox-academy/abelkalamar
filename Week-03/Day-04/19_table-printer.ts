'use strict';
export { };

// Create a function that prints the ingredient list of dictionaries to the console in the following format:
//
// +--------------------+---------------+----------+
// | Ingredient         | Needs cooling | In stock |
// +--------------------+---------------+----------+
// | vodka              | Yes           | 1        |
// | coffee_liqueur     | Yes           | -        |
// | fresh_cream        | Yes           | 1        |
// | captain_morgan_rum | Yes           | 2        |
// | mint_leaves        | No            | -        |
// +--------------------+---------------+----------+
//
// OPTIONAL
// The frist columns should be automatically as wide as the longest key

const tablePrinter = (arr: any[]): void => {
  let a: string = '+';
  let b: string = '-';
  let c: string = '|';
  let cooling: string[] = [];
  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i].needsCooling) {
      cooling[i] = 'Yes';
    } else {
      cooling[i] = 'No';
    }
  }
  let storage: string[] = [];
  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i].inStock > 0) {
      storage[i] = arr[i].inStock.toString();
    } else {
      storage[i] = '-';
    }
  }
  let col1Width: number = ' Ingredient '.length;
  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i].name.length + 2 > col1Width) {
      col1Width = arr[i].name.length + 2;
    }
  }
  let col2Width: number = ' Needs cooling '.length;
  let col3Width: number = ' In stock '.length;
  for (let i: number = 0; i < arr.length + 4; i++) {
    if (i === 0 || i === 2 || i === (arr.length + 3)) {
      console.log(`${a}${b.repeat(col1Width)}${a}${b.repeat(col2Width)}${a}${b.repeat(col3Width)}${a}`)
    } else if (i === 1) {
      console.log(`${c}${' Ingredient '.padEnd(col1Width, ' ')}${c} Needs cooling ${c} In stock ${c}`);
    } else {
      console.log(
        `${c} ${arr[i - 3].name.padEnd(col1Width - 1, ' ')}${c} ${cooling[i - 3].padEnd(col2Width - 1, ' ')}${c} ${storage[i - 3].padEnd(col3Width - 1, ' ')}${c} `)
    }
  }
}

const ingredients: any[] = [
  { name: 'vodka', inStock: 1, needsCooling: true },
  { name: 'coffee_liqueur', inStock: 0, needsCooling: true },
  { name: 'fresh_cream', inStock: 1, needsCooling: true },
  { name: 'captain_morgan_rum', inStock: 2, needsCooling: true },
  { name: 'mint_leaves', inStock: 0, needsCooling: false },
  { name: 'sugar', inStock: 0, needsCooling: false },
  { name: 'lime juice', inStock: 0, needsCooling: true },
  { name: 'soda', inStock: 0, needsCooling: true }
];

tablePrinter(ingredients);


