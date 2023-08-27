function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  } else {
    const resultArray = rangeOfNumbers(startNum + 1, endNum);
    resultArray.unshift(startNum);
    return resultArray;
  }
}

console.log(rangeOfNumbers(1, 4));
