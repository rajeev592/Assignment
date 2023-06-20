// only unique items are allowed

function uniqueElements(arr) {
    return new Set(arr);
}

console.log(uniqueElements([1,2,3,2,3,4,5,5,6]));
console.log(uniqueElements([7,8,7,8,9,10,11,12,11,13]));