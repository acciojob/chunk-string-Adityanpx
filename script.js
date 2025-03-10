function stringChop(str, size) {
  if (!str || typeof str !== "string" || size <= 0) return []; // Validate input

  let result = [];
  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size)); // Use `slice()` instead of `substring()`
  }
  return result;
}

// Do not change the code below
const str = prompt("Enter String:").trim(); // Trim input to avoid accidental spaces
const size = Number(prompt("Enter Chunk Size:")); // Convert input to a number

if (isNaN(size) || size <= 0) {
  alert("Invalid chunk size. Please enter a positive integer.");
} else {
  alert(JSON.stringify(stringChop(str, size))); // Display result
}
