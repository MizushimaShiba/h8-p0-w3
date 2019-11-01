function perkalianUnik(arr) {
    // you can only write your code here!
    let result = []
    for (let index = 0; index < arr.length; index++) {
        let temp = 1
        for (let jindex = 0; jindex < arr.length; jindex++) {
            if (index == jindex) {
                continue
                
            }
            temp *= arr[jindex]
            
        }
        result.push(temp)
        
    }   
    return result
  }
  
  // TEST CASES
  console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
  console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
  console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
  console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
  console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]