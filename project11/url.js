// Function to check if a URL matches the conditions
function checkValidURL(url) {
    const regex = /^(http:\/\/|https:\/\/)[a-zA-Z0-9\-._~:/?#@!$&'()*+,;=]+[.][a-zA-Z]+$/;
  
    if (regex.test(url)) {
      console.log("The URL matches the conditions.");
    } else {
      console.log("The URL does not match the conditions.");
    }
  }
  
  // Test cases
  const url1 = "http://www.example.com";
  const url2 = "https://www.example.com";
  const url3 = "http://example123.com";
  const url4 = "https://example!@#$%&*().com";
  const url5 = "http://www.example";
  const url6 = "example.com";
  
  checkValidURL(url1);
  checkValidURL(url2);
  checkValidURL(url3);
  checkValidURL(url4);
  checkValidURL(url5);
  checkValidURL(url6);
  