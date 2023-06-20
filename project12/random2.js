// access random elements

function extract(arr) {
    const [first, second, , , , , , ,last] = arr;
    return [first, second, last];
}
const array = [1,2,3,4,5,6,7,8,9];
console.log(extract(array));
