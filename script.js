function stringChop(str, size) {
  if (!str) return []; // If input is null or empty, return an empty array

  let result = [];
  for (let i = 0; i < str.length; i += size) {
    result.push(str.substring(i, i + size)); // Extract substring of length `size`
  }
  return result;
}

// Do not change the code below
const str = prompt("Enter String:");
const size = parseInt(prompt("Enter Chunk Size:"), 10); // Ensure size is an integer
alert(JSON.stringify(stringChop(str, size))); // Display result as a string
