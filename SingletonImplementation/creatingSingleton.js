var singletonImplementation = (function CreateSingleton() {
  
  function Employee() {
    this.name = "Mayank";
    this.age = 10
  }

  var employeeData = null;

  function getEmployee() {
    if(employeeData != null) {
      return new Employee();
    }

    else return employeeData;
  }
})();

var employeeDataInfo = singletonImplementation.getEmployee();
var employeeDataInfoAgain = singletonImplementation.getEmployee()

console.log(employeeDataInfo === employeeDataInfoAgain)