function SampleModulePattern(name, age, designation) {
  var name = name;
  var age = age;
  var designation = designation;

  function getDetails() {
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Designation: " + designation);
  }

  return {
    getDetails: getDetails
  }
}

var employeeOne = SampleModulePattern("Mayank", 10, "Developer");

employeeOne.getDetails();