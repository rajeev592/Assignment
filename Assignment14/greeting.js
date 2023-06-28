function greet(name) {
   return new Promise((resolve, reject) => {
    const greeting = `Hello, ${name}!`;
    resolve(greeting);
   });
}

greet("Rajeev").then((message) => console.log(message));