// Task 1

function f1(){
   let inputValue = document.querySelector('.i-1').value;
   let result = (inputValue == 4);
   document.querySelector('.out-1').textContent = result;
}

document.querySelector('.b-1').onclick = f1;


// Task 2


function f2(){
   let num1 = +document.querySelector('.a21').value;
   let num2 = +document.querySelector('.a22').value;
   let result = (num1 > num2)? num1 : num2;
   document.querySelector('.out-2').textContent = result;
}

document.querySelector('.b-2').onclick = f2;


// Task 3

function f3(){
   let num1 = +document.querySelector('.i-31').value;
   let num2 = +document.querySelector('.i-32').value;
   let result = (num1 > num2)? num1 : num2;
   document.querySelector('.out-3').textContent = result;
}

document.querySelector('.b-3').onclick = f3;


// Task 4. 


function f4() {
  let birthYear = +document.querySelector('.i-4').value;
  let currentYear = new Date().getFullYear();
  let result = (currentYear - birthYear >= 18)? 1 : 0;
  document.querySelector('.out-4').textContent = result;
}

document.querySelector('.b-4').onclick = f4;

// Task 5. 

function f5(){
   
}


document.querySelector('.b-5').onclick = f5;


// Task 6.

function f6(){
   

}

document.querySelector('.b-6').onclick = f6;

// Task 7.

function f7(){
   
}

document.querySelector('.b-7').onclick = f7;

// Task 8.


function f8() {
  
}

document.querySelector('.b-8').onclick = f8;

// Task 9

function f9(){
   

}

document.querySelector('.b-9').onclick = f9;

// Task 10

function f10(){
   

}

document.querySelector('.b-10').onclick = f10;

// Task 11

function f11(){
   

}

document.querySelector('.s-110').onchange = f11;


 
 
 

// Task 12

//let i120 = document.querySelector('.i-120');
//let out_12 = document.querySelector('.out-12');

//function f12(){
//   let v = i120.value;
//   out_12.innerHTML = (typeof v);

//}

//document.querySelector('.b-12').onclick = f12;

// Task 13


function f13() {
   
}

document.querySelector('.b-13').onclick = f13;



// Task 14


function f14() {
   let num1 = document.querySelector('.i-141').value;
   let num2 = document.querySelector('.i-142').value;
   let op = document.querySelector('.s-143').value;
   let result = document.querySelector('.out-14');

   switch (op){
    case '+':
        result = num1 + num2;
        break;
    case '-':   
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = num1 / num2;
        break;
   }
   document.querySelector('.out-14').textContent = result;
}

document.querySelector('.b-14').onclick = f14;

// Task     15


function f15() {
  let num1 = document.querySelector('.s-151').value;
  let num2 = document.querySelector('.s-152').value;
  let oper = document.querySelector('.s-153').value;
  let result = 0;
  switch (oper){
    case '&&':
        result = (num1 === '1' && num2 === '1')? 1 : 0;
        break;
    case '||':
        result = (num1 === '1' || num2 === '1')? 1 : 0;
        break;
    default:
        result = 'unknown'
  }

  document.querySelector('.out-15').textContent = result;   
}

document.querySelector('.b-15').onclick = f15;


