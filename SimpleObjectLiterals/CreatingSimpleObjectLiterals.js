var simpleObject = {
  name: "Mayank",
  age: 20,
  designation: "Developer",
  getUserData: function() {
    console.log("User Name: " + this.name);
  }
}

simpleObject.getUserData();
