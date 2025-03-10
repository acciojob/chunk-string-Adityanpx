function stringChop(str, size) {
  if (!str || typeof str !== "string" || isNaN(size) || size <= 0) return []; // Validate input

  let result = [];
  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size)); // Use `slice()`
  }
  return result;
}

// Do not change the code below
const str = prompt("Enter String:"); 
const size = parseInt(prompt("Enter Chunk Size:"), 10); // Parse input as integer

if (isNaN(size) || size <= 0) {
  alert("Invalid chunk size. Please enter a positive integer.");
} else {
  alert(JSON.stringify(stringChop(str, size))); // Show result
}
