function findMin(arr) {
    if (arr.length < 1) {
        return -1;
    }
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {

        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}

let arr1 = [7, 12, 6, 9, 20, 56, 89];
let min = findMin(arr1);
if(min==-1){
    alert('mang khong co gia tri nao');
}else {
    alert(min);
}

