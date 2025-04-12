let arr = 12213;
let arr1 = arr.toString().split('');
console.log(arr1);

function palindrom(number1, number2) {
  for (let i = 0; i < arr1.length; i++) {
    let el = arr1[i];
    // console.log(el);

    for (let k = arr1.length - 1; k >= 0; k--) {
      let el1 = arr1[k];
      console.log(el1);

      if (el === el1) {
        return true;
      } else {
        return false;
      }
    }
  }
}

console.log(palindrom(arr1, arr1));
