'use strict';
export { };

const accounts: any[] = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];

// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]

function getNameAndBalance(arr: any, accountNumber: number): any[] {
  let client: any[] = [];
  for (let i: number = 0; i < arr.length; i++) {
    if (accountNumber === arr[i].accountNumber) {
      client.push(arr[i].clientName);
      client.push(arr[i].balance);
    }
  }
  return client;
}

console.log(getNameAndBalance(accounts, 23456311));

// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.


function transferAmount(acc: any[], fromAcc: number, toAcc: number, amount: number) { 
  for (let i: number = 0; i < acc.length; i++) {
    if(acc[i].accountNumber === fromAcc) {
      acc[i].balance -= amount;
    }
    if(acc[i].accountNumber === toAcc) {
      acc[i].balance += amount;
    }
  }
}

transferAmount(accounts, 43546731, 23456311, 10000.0);
console.log(accounts);

//After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
//]
/*
export = {
  getNameAndBalance,
  transferAmount,
  accounts
};
*/