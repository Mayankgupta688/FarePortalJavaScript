function SampleModulePattern(name, age, designation) {
  var name = name;
  var age = age;
  var designation = designation;

  return {
    userName: name,
    userAge: age,
    userDesignation: designation
  }
}

var employeeOne = SampleModulePattern("Mayank", 10, "Developer");

console.log("Name: " + employeeOne.userName);
console.log("Age: " + employeeOne.userAge);