function sumManyTimes(multiplier, ...numbers) {
  const sumaTotal = numbers.reduce((acumulado, num) => acumulado + num, 0);
  return sumaTotal * multiplier;
}

console.log(sumManyTimes(2, 1, 2, 3));    
console.log(sumManyTimes(10, 5, 10, 15));  