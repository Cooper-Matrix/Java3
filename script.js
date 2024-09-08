// Function to calculate the sum of two numbers
function calculateSum(a, b) {
  return a + b;
}

// Function to compute the area of a rectangle
function areaOfRectangle(length, width) {
  return length * width;
}

// Object with properties and a method
let phone = {
  brand: 'Samsung',
  model: 'Galaxy S22',
  releaseYear: 2023,
  getDetails: function() {
    return `${this.brand} ${this.model} (${this.releaseYear})`;
  }
};

// Event listener for the button
document.getElementById("calculateButton").addEventListener("click", function() {
  // Retrieve user inputs
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let length = parseFloat(document.getElementById("length").value);
  let width = parseFloat(document.getElementById("width").value);

  // Validate inputs
  if (isNaN(num1) || isNaN(num2) || isNaN(length) || isNaN(width)) {
    document.getElementById("result").innerHTML = "Please enter valid numbers in all fields.";
    return;
  }

  // Perform calculations
  let sum = calculateSum(num1, num2);
  let area = areaOfRectangle(length, width);

  // Display results
  document.getElementById("result").innerHTML = `Sum: ${sum}, Area: ${area}`;
  console.log(phone.getDetails());
});
