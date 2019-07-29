function forLoop(array){
  let newArray = [];
  for(let i = 0; i <= 25; i++){
    if(newArray[i] === 1){
      newArray  += "I am 1 strange loop.";
    } else {
      newArray += "I am ${i} strange loop.";
  }
} 
}

function whileLoop(n){
  while(n > 0){
    console.log(--n)
  }
  return 'done';
}

function doWhileLoop(num){
  let i = 0;
 function incrementVariable() {
  i = i + 1;
  return i;
}

do {
  console.log("I run once regardless.");
} while (incrementVariable() < num);
}
  
  
  