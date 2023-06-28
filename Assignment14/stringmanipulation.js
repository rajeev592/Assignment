function manipulateString(inputString, callback) {
    const manipulateString = inputString.toUpperCase();

    callback(manipulateString);
}

function logString(manipulateString) {
    console.log(`The manipulated string is: ${manipulateString}`);
}

manipulateString("hello, rajeev", logString);