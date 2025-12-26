let myText = document.getElementById('my_text');
let result = document.getElementById('result');

let limit = 100;
result.textContent = 0 + '/' + limit;

myText.addEventListener('input', ()=>{

  let textLength = myText.value.length;
  result.textContent = textLength + '/' + limit;


  if (textLength > limit) {
    myText.style.borderColor = '#ff2851';
    result.style.color = '#ff2851';
  } else{
    myText.style.borderColor = '#a6a6a6';
    result.style.color = '#232323'
  }

})