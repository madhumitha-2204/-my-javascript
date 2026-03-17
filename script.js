function runApp() {

  // Array
  let nums = [10, 20];

  // Spread operator
  let newNums = [...nums, 30];

  console.log("New Array:", newNums);

  // Callback function
  function process(data, callback) {
    callback(data);
  }

  let result = "";

  process(newNums, function(data) {

    data.forEach((num, index) => {

      // Destructuring (array)
      let [value] = [num];

      // Template literal
      let text = `${index + 1} value is ${value}`;

      console.log(text);

      result += <p>${text}</p>;
    });

  });

  document.getElementById("output").innerHTML = result;
}
     