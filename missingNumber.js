arr = [11, 13, 16, 19];
let missingItem = [];
let newArr=[];
let miss_arr_param_index = [];
function missingItems(arr) {
    for (let i = arr[0]; i <= arr[arr.length - 1]; i++){
        newArr.push(i);
        if (!arr.includes(i)){
            missingItem.push(i);
            let value = newArr.indexOf(i);
            miss_arr_param_index.push(value);
        }
    }
}
missingItems(arr)
console.log("Original Array  ["+ arr+"]");
console.log("Array of missingItems  ["+ missingItem+"]");
console.log("Indexes of missingItems  ["+ miss_arr_param_index+"]");
console.log("New Array  ["+ newArr+"]");