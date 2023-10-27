function evaluatePostFix(S) {
  S = S.replaceAll(' ', '');
  const stack = [];
  let top = -1;

  for (let i = S.length-1; i>=0; i--) {
    if(S.charCodeAt(i)>= 48 && S.charCodeAt(i)<58) {
      stack.push(parseInt(S.charCodeAt(i) - 48));
      top++;
    }
 
    else
 {
     let val1 = stack[top];
     stack.pop();
     top--;
     let val2 = stack[top];
     stack.pop();
     top--;

     if(S[i] == '+') {
       stack.push(val2 + val1);
       top++
     }
    else if(S[i] == '-') {
      stack.push(val2 - val1);
      top++
    }
  else if(S[i] == '*') {
      stack.push(val2 * val1);
      top++
    }
    else if(S[i] == '/') {
      stack.push(Math.floor(val2 / val1));
      top++
    }
   }
  }
  if(stack[top] == -0) 
  return 0;
  return stack[top]
}


const btn = document.querySelector('#evaluate-button');

btn.onclick = function() {
  let inputVal = document.querySelector('#insert-expression').value;
  let outputVal = evaluatePostFix(inputVal);
  let outputAreaField = document.querySelector('.output-area');
  outputAreaField.value = outputVal;
  console.log(outputVal);

}