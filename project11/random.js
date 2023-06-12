// Function to generate a random number
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
  }
  
  // Function to display countdown messages
  function displayCountdown(timeRemaining) {
    console.log("Time remaining: " + timeRemaining + " seconds...");
  }
  
  // Function to generate random number after a delay
  function generateNumberAfterDelay(delay) {
    setTimeout(function() {
      let randomNum = generateRandomNumber();
      console.log("Random number generated: " + randomNum);
    }, delay * 1000);
  
    for (let i = delay; i >= 1; i--) {
      setTimeout(displayCountdown, (delay - i) * 1000, i);
    }
  }
  
  // Set the desired delay
  let delay = 3;
  
  // Call the function with the specified delay
  generateNumberAfterDelay(delay);
  