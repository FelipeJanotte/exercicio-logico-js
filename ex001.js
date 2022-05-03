/*
  ? 1) Implemente um método que crie um novo array baseado nos valores passados.Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']
*/

function letterRepeater(timesToRepeat, letterToRepeat) {
  const arr = [];

  for(let i = 0; i < timesToRepeat; i++) {
    arr[i] = letterToRepeat;
  };
  
  return arr;
}

console.log(letterRepeater(3,"a"))