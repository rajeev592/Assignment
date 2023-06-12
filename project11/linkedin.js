// Function to validate LinkedIn profile URLs
function validateLinkedInURL(url) {
    const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
  
    if (regex.test(url)) {
      console.log("The URL is a valid LinkedIn profile URL.");
    } else {
      console.log("The URL is not a valid LinkedIn profile URL.");
    }
  }
  
  // Test cases
  const url1 = "https://www.linkedin.com/in/johndoe123";
  const url2 = "https://www.linkedin.com/in/jane_smith";
  const url3 = "https://www.linkedin.com/in/james-brown-123";
  const url4 = "https://www.linkedin.com/in/user_name_987654321";
  const url5 = "https://www.linkedin.com/in/invalidURL";
  const url6 = "https://www.linkedin.com/profiles/johndoe123";
  const url7 = "https://www.linkedin.com/in/john12345doeabcdefghijklmnopqrst";
  
  validateLinkedInURL(url1);
  validateLinkedInURL(url2);
  validateLinkedInURL(url3);
  validateLinkedInURL(url4);
  validateLinkedInURL(url5);
  validateLinkedInURL(url6);
  validateLinkedInURL(url7);
  