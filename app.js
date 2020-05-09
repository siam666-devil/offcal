document.querySelector('.main-form').addEventListener('submit',calculate);


function calculate(e){

  if(document.querySelector('#amount').value == '' || document.querySelector('#percent').value == '' ){
    alert('Please Enter the AMOUNT')
  } else {
    const amount = document.querySelector('#amount').value;
    const percent = document.querySelector('#percent').value;
    const amountNumber = parseFloat(amount);
    const percentNumber = parseFloat(percent);
    const box1 = document.querySelector('.box1');
    const box2 = document.querySelector('.box2');
    const pay = (amountNumber - (amountNumber*percentNumber) / 100).toFixed(2) ;
    const discount = (amountNumber * percentNumber / 100).toFixed(2);
    box1.textContent = `Pay ${pay} TAKA`
    box2.textContent = `Discount ${discount} TAKA`
  }
  e.preventDefault()
}