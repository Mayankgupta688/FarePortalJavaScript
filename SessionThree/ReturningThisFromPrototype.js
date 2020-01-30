function Employee() {
  this.name = "Mayank";
  this.age = 10;
  this.designation = "Developer";
  return this;
}

var employeeData = Employee();

// "employeeData" is now representing the Objct references.

// Even if we are not adding "new" keywork, returning "this" will return the memory address of the Object.