/*
  ? 6) Implemente um método que retorne um array, sem valores duplicados.Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]
*/

function unduplicateItemsFromArray(arr) {
  let newArray = [];

  arr.forEach((el) => {
    if (!newArray.includes(el)) {
      newArray.push(el);
    }
  });

  return newArray;
}

console.log(unduplicateItemsFromArray([1, 2, 3, 3, 2, 4, 5, 4, 7, 3]));
