let orders = [
  {amount: 250},
  {amount: 400},
  {amount: 100},
  {amount: 325},
]

let totalAmmount = orders.reduce(function(sum, order) {
  console.log('result', sum, order);
  return sum + order.amount
}, 0);

console.log(totalAmmount);