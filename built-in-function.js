// function dataHandling2 (arr) {
//     var temp=''
//     var contoh1 =  contoh.splice(1, 'Roman Alamsyah Elsharawy ')
//     //  temp+=contoh
//     //  console.log(arr)
//     var split= contoh[3].split('/')
    
//     temp+=contoh1
//     // temp+=split
//     return temp
// }

var contoh = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]
// console.log(dataHandling2(contoh))
contoh.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung')
console.log(contoh)

var arraySplit = contoh[3].split('/')
// console.log(arraySplit)
var splitTanggal = arraySplit[1].split('/')
// console.log(splitTanggal)
var bulan = splitTanggal[0]
switch (bulan){
    case '01':
        console.log(` January `);
        break;
    case '02':
        console.log(` February `);
        break;
    case '03':
        console.log(` March `);
        break;
    case '04':
        console.log(` April `);
        break;
    case '05':
        console.log(` May `);
        break;
    case '06':
        console.log(` June `);
        break;
    case '07':
        console.log(` July `);
        break;
    case '08':
        console.log(` August `);
        break;
    case '09':
        console.log(` September `);
        break;
    case '10':
        console.log(` October `);
        break;
    case '11':
        console.log(` November `);
        break;
    case '12':
        console.log(` Desember `);
        break;
    default:
        console.log('Wrong input');
        break;

}

// console.log(arraySplit)

var arrayJoin = arraySplit.join('-')
console.log(arrayJoin)
var arraySort =  arraySplit.sort(function(a, b){return b-a})
console.log(arraySplit)
var namaSlice = contoh[1].slice(0,15)
console.log(namaSlice)
// var namaString = namaSplit.slice()
// console.log(namaString)
// var arraySort =  arraySplit.sort(function(a, b){return b-a})
// console.log(arraySort)
// ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
// Mei
// ["1989", "21", "05"]
// 21-05-1989
// Roman Alamsyah