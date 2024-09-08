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
  let sum = calculateSum(10, 20);
  let area = areaOfRectangle(6, 8);
  document.getElementById("result").innerHTML = `Sum: ${sum}, Area: ${area}`;
  console.log(phone.getDetails());
});
