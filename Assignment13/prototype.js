// prototype object

const Student = {
    name: "",
    printDetails: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

// instantiate student object

const student1 = Object.create(Student);
student1.name = "Rajeev Ranjan";

// call the printdetails

student1.printDetails();