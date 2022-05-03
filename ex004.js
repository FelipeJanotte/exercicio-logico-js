/* 
  ? 4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
  ? Entrada do método ([["c",2],["d",4]]), Resultado do métdodo: {c:2, d:4}
*/

function objectConverter(arr) {
  let newObject = new Object;
  
  arr.map(el => {
    newObject[el[0]] = el[1]
  })

  return newObject
}

console.log(objectConverter([["c", 2],["d", 4]]));