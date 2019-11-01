function groupAnimals(animals) {
    // you can only write your code here!
    let hasil = []
    let ketemu
    for (let index = 0; index < animals.length; index++) {
        ketemu = false
        // console.log(animals[index])
        for (let jindex = 0; jindex < hasil.length; jindex++) {
            // console.log(animals[index][0], hasil[jindex][0]);
            
            if (animals[index][0] === hasil[jindex][0][0]) {
                hasil[jindex].push(animals[index])
                ketemu = true
            }
            // console.log(animals[index])
        }
        if (!ketemu) {
            hasil.push([animals[index]])
        }
        
    }
    return hasil.sort()
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]