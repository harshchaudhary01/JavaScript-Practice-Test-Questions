var arr = [2,3,4,5,6];
arr.forEach((num, index)=>{
    if(num % 2 == 0){
        arr[index] = num*num;
    }
})
console.log(arr);