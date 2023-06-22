function numberChecker(numbers) {
    return function(number) {
        return numbers.includes(number);
    };
};

const numbersArray = [1, 2, 3, 4, 5];
const checkNumber = numberChecker(numbersArray);

console.log(checkNumber(3));
console.log(checkNumber(6));