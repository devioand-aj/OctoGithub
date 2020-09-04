export default function getParsedDigits(digits) {
  const digitsArr = digits.toString().split("");
  const length = digitsArr.length;

  if (length < 4) return digits.toString();

  let index = length;
  while (true) {
    index = index - 3;
    if (index < 1) break;

    for (let i = 0; i < length; i++) {
      if (index === i) {
        for (let j = digitsArr.length - 1; j >= i; j--)
          digitsArr[j + 1] = digitsArr[j];
        digitsArr[index] = ",";
      }
    }
  }

  return digitsArr.join("");
}
