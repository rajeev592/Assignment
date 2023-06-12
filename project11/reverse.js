// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Variable storing the input string
  const input = "rajeev";
  
  // Function to reverse the string after a delay
  function reverseAfterDelay(str) {
    setTimeout(function() {
      const reversed = reverseString(str);
      console.log(reversed);
    }, 2000);
  }
  
  // Call the function with the input string
  reverseAfterDelay(input);
  