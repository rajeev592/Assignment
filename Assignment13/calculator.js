class calculator {
    static add (number1, number2) {
        return number1+number2;
    }
}

const calcuLator = new calculator();

const sum = calculator.add(9, 6);
console.log(sum);