function Employees(name, age, designation) {
  this.name = name;
  this.age = age;
  this.designation = designation;
}

Employees.prototype.getDetails = function() {
  console.log("Designation: " + this.designation);
  console.log("Name: " + this.name);
  console.log("Age: " + this.age);
}

var employeeOne = new Employees("Mayank", 10, "Trainer")