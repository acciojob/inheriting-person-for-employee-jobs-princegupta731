// complete this js code
function Person(name, age) {
	constructor(name, age){
	this.name = name;
	this.ager = age;
	}
	greet(){
	 return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
	}
}
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);
    this.jobTitle = jobTitle;
  }
jobGreet() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and I work as a ${this.jobTitle}.`;
  }
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
