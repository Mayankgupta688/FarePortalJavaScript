function Employees(name, age, designation) {
  this.name = name;
  this.age = age;
  this.designation = designation;

  var salary = 1000;
}

Employees.prototype.getDetails = function() {
  console.log("Designation: " + this.designation);
  console.log("Name: " + this.name);
  console.log("Age: " + this.age);

  // The "salary" variable is not same as what we have defined in the Employee Function
  console.log(this.salary);
}

var employeeOne = new Employees("Mayank", 10, "Trainer")