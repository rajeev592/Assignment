// min ans max value

function maxMin(arr) {
    return {
        min: Math.min(...arr),
        max: Math.max(...arr),
    };
};

const array = [1,2,4,5,3,9,7,6,8];
console.log(maxMin(array));