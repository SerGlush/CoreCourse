'use strict'

function task(arr){
    let identical_pair = false;
    
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) identical_pair = true;
      }
    }
    
    return identical_pair
}
