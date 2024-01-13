const numbersObject = {
  1: '၁',
  2: '၂',
  3: '၃',
  4: '၄',
  5: '၅',
  6: '၆',
  7: '၇',
  8: '၈',
  9: '၉',
  0: '၀',
  '.': '.'
}

function getMmNumber(number) {
  let result = '';
  const numberString = String(number);

  for (let i = 0; i < numberString.length; i++) {
    result += numbersObject[numberString[i]] ? numbersObject[numberString[i]] : numberString[i];
  }

  return result;
}

export default getMmNumber;