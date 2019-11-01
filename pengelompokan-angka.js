function mengelompokkanAngka(arr) {
    // you can only write your code here!
    let ganjil = []
    let genap = []
    let kelipatan3= []
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] % 3 == 0) {
            kelipatan3.push(arr[index])
        } else if (arr[index] %2 == 0) {
            genap.push(arr[index])
        } else if (arr[index] %2 != 0) {
            ganjil.push(arr[index])
        }
    }
    // console.log(ganjil, genap, kelipatan3)
    return [genap, ganjil, kelipatan3]
  }
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]