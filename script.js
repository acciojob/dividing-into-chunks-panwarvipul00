const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  const result = [];
  let currentChunk = [];
  let currentSum = 0;

  for (let num of arr) {
    // Convert to number if needed (prompt returns string)
    num = Number(num);

    if (currentSum + num <= n) {
      currentChunk.push(num);
      currentSum += num;
    } else {
      if (currentChunk.length > 0) {
        result.push(currentChunk);
      }
      currentChunk = [num];
      currentSum = num;
    }
  }

  if (currentChunk.length > 0) {
    result.push(currentChunk);
  }

  return result;
};

const n = parseInt(prompt("Enter n: "), 10);
alert(JSON.stringify(divide(arr, n)));
