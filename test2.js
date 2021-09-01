const numToSeparate = 12345;

const arrayOfDigits = Array.from(String(numToSeparate), Number);

// console.log(arrayOfDigits);   //[1,2,3,4,5]

function squareEveryDigit(number) {
  newArrayNumber=Array.from(String(number), Number)
  newString=""

  for (let i=0;i<newArrayNumber.length; i++){
    console.log(i)
    newString=newString+newArrayNumber[i]*newArrayNumber[i]
  }
  return newString
}


// squareEveryDigit(946) // When running 946, you should see a result of 811636
console.log(squareEveryDigit(946))