const coins = {
  quarter: 25,
  dime: 10,
  nickel: 5,
  penny: 1,
};


let amount;

do {
  amount = parseFloat(prompt("Change owed: "));
} while (typeof amount !== "number");

console.log(countCoins(amount));


function countCoins(amount) {
  let numberOfCounts = 0;
  let coin = Math.round(amount * 100);

  for (let key in coins) {
    if (coin !== 0) {
      coin %= coins[key];
      numberOfCounts++;
    }
  }

  return numberOfCounts;

}


