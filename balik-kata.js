function balikKata(arr) {
    var temp=''
    for (i=arr.length-1; i>=0; i--){
        temp+=arr[i]
        
        
    }
    return temp
}
console.log(balikKata(`hello world!`))