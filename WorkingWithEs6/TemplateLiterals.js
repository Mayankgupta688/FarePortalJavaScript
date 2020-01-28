function ExecuteAsyncData() {
  var newPromise = new Promise(function(resolve) {
    setTimeout(() => {
      resolve("Sample Data")
    }, 5000)
  })

  return newPromise;
}


var dataPromise = ExecuteAsyncData();

dataPromise.then((data) => {
  console.log(data)
});