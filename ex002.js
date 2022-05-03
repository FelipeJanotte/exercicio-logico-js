/*
  ? 2) Implemente um método que inverta um array, não utilize métodos nativos do array. Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]
*/

function arrayInverter(arr) {
  let newArray = [];

  for(let i = 0; i <arr.length ; i++) {
    let j = (arr.length - 1) - i
    newArray[i] = arr[j];
  }

  return newArray
}

console.log(arrayInverter([1,2,3,4]));
