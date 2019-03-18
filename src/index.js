module.exports = function getZerosCount(number, base) {
   let arr = [];  
  let n = 1;
  let result = 0;
  let maxValue = 0;
  if(base > 0 && base != 1){
    for(let i =2; i<=base; i++){
      while(base % i == 0 && base > 1){
        arr.push(i);
        base = base / i;
      }
      if(base/i == 1) {
        arr.push(base);
      }
    }

  } else if(base == 1) {
    arr[0] = 1;
  }
  
  for (let k = 0; k < arr.length; k++){
    if (arr[k] >= arr[k - 1]) {
      maxValue = arr[k];  
    } 
  }
    
  
  while (number >= n){
      n *= maxValue;
      result += Math.floor(number/n);
  }
        
    return result;  
}