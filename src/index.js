module.exports = function getZerosCount(number, base) {
  
  let arr = [];  
  let n = 1;
  let result = 0;
  let count = 0;
  
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
  
  let maxValue = arr[arr.length - 1];
  let arrLen = arr.length;
  while(maxValue == arr[arrLen - 1]) {
    arrLen = arrLen -1; 
    count++;
  }
    
  
  while (number >= n){      
      n *= maxValue;      
      result += Math.floor(number/n) ;      
  }
        
    return  Math.floor(result/count);  
}