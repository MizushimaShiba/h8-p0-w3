function targetTerdekat(arr) {
  // you can only write your code here!
  let tempO = -1;
  let tempX = [];
  // finding o
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] == 'o') {
      tempO = index
      break
    }
  }
  // finding x
  for (let index = 0; index < arr.length; index++) {    
    if (arr[index] == 'x') {
      tempX.push(index)     
    }
  }
  if (tempO == -1 || tempX == 0) {
    return 0
  }
  // finding nearest
  let terdekat = Math.abs(tempO-tempX[0])
  for (let index = 0; index < tempX.length; index++) {
    if (Math.abs(tempO-tempX[index]) < terdekat) {
      terdekat = Math.abs(tempO-tempX[index])
    }
  }
  return terdekat
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2