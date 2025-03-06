let calculation = localStorage.getItem('calculation') || '';

displayResult();

function updateCalculation(number) {
  const operatorCheck = document.querySelector('.screen').innerHTML.slice(-1)
  
  if (calculation === '0') {
    calculation = number;
  }else if (
    number === '+' ||
    number === '-' ||
    number === '*' ||
    number === '/' ){
    if(operatorCheck !== '+' && operatorCheck !== '-' && operatorCheck !== '/'&& operatorCheck !== '*'){
      calculation += number;}
  }else {
    calculation += number;
  }
  localStorage.setItem('calculation', calculation)
  console.log(calculation)
  displayResult();
}

function resetcalculation() {
  calculation = '0';
  localStorage.setItem('calculation', calculation)
  displayResult();
}

function displayResult() {
  document.querySelector('.screen').innerHTML = calculation;
  
}
