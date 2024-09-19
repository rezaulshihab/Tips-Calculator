//javaScript style
let maines = document.getElementById('maines');
let sum = document.getElementById('sum');
let plus = document.getElementById('plus');
let count = 1;

plus.addEventListener('click',function(){
count++
sum.innerText = count
})
maines.addEventListener('click',function(){
  if(count > 1){
    count--
  }
  sum.innerText = count
})
let Calculate = document.getElementById('btn');
Calculate.addEventListener('click',function(){
    document.querySelector('.summary').classList.remove('block')
  let tolalBill = Number(document.getElementById('val').value);
  let tipBill = Number(document.getElementById('val-2').value);
  document.getElementById('total').innerText = tolalBill;
  document.getElementById('tip').innerText = tipBill;
  let countSum = sum.innerText;
  document.getElementById('enter').innerHTML = (
    (tolalBill + tipBill) * countSum
  ).toFixed(2);
  document.getElementById('enter').style.fontSize = '15px';
});


