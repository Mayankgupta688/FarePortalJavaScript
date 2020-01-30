function Employee() {
  this.name = "Mayank";
  this.age = 10;
  this.designation = "Developer";

  return 10;
}

var returnData = Employee();

console.log(returnData);

// This will return value "10" instead of returning the object reference.