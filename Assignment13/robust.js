function getPerson(obj) {
    try {
      if (typeof obj !== 'object' || !obj.hasOwnProperty('name') || !obj.hasOwnProperty('age')) {
        throw new Error("Invalid parameter type");
      }
      
      const name = obj.name;
      const age = obj.age;
      
      return `Name: ${name}, Age: ${age}`;
    } catch (error) {
      return error.message;
    }
  }

  
  const person1 = { name: 'Rajeev Ranjan', age: 24 };
console.log(getPerson(person1));  

const person2 = { name: 'Kuku singh' };
console.log(getPerson(person2)); 

const person3 = ["name", "kuku" ]
console.log(getPerson(person3)); 
