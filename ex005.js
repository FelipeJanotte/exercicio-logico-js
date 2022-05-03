/*
  ? 5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada. Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2]
*/

function filterArray(arr, ...items) {
  let newArray = [];

  newArray = arr.filter(el => !items.includes(el));

  return newArray;
}

console.log(filterArray([5, 4, 3, 2, 5], 5, 3));
