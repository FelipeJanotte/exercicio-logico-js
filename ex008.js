/*
  ? 8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico. Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]
*/

function removeArraysFromArray(arr) {
  let newArray = [];

  newArray = arr.toString().split(",");

  return newArray;
}

console.log(removeArraysFromArray([1, 2, [3], [4, 5]]));
