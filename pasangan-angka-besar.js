function pasanganTerbesar(num) {
    // you can only write your code here!
    var numArr = num.toString().split('')
    var kosong = []
    for (var i = 0; i < numArr.length; i++) {
        kosong[i] = Number(numArr[i]+numArr[i+1]) ;
        
    }
    var hasil =  kosong[0]
    for (let index = 1; index < kosong.length; index++) {
        if (kosong[index]> hasil) {
            hasil = kosong[index]
        };
        
    }
    return hasil
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99