// Object containing the items and their prices in USD
const items = {
    apple: 2,
    banana: 3,
    orange: 4,
    mango: 5,
  };
  
  // Exchange rate from USD to INR
  const exchangeRate = 80;
  
  // Function to convert the prices from USD to INR
  function convertToINR(price) {
    return price * exchangeRate;
  }
  
  // Use the map higher-order function to convert the prices
  const convertedItems = Object.fromEntries(
    Object.entries(items).map(([item, price]) => [item, convertToINR(price)])
  );
  
  // Output the converted prices
  console.log("Converted prices in INR:", convertedItems);
  