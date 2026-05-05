// Task 1.
let a = 7;
let b = 9;
console.log(a * b);
// Task 2.
let c = 7;
let d = 9;
document.querySelector('.out-2').textContent = c / d;

// Task 3.
let e = 3;
let f = 5;
document.querySelector('.out-3').textContent = e + f;

// Task 4.
let e1 = '3';
let f1 = 5;
document.querySelector('.out-4').textContent = e1 + f1;
// Task 5.
let e2 = 3;
let f2 = 0;
document.querySelector('.out-5').textContent = e2 / f2;
// Task 6.
let e3 = 3;
let f3 = 'Hello';
document.querySelector('.out-6').textContent = e3 + f3;

// Task 7.
let e4 = 3;
let f4 = 'Hello';
document.querySelector('.out-7').textContent = e4 * f4;
// Task 8.
let inputIn = document.querySelector('.i-8');
let button = document.querySelector('.b-8');
let output = document.querySelector('.out-8');
button.onclick = function t8() {    
    let val = inputIn.value;
    output.innerHTML = val;
}
// Task 9.
let button2 = document.querySelector('.b-9');
let inputIn2 = document.querySelector('.i-9');
button2.onclick = function t9() {
    document.querySelector('.out-9').textContent = inputIn2.value;
    inputIn2.value = '';
}

// Task 10.
document.querySelector('.b-10').onclick = function t10() {
    let data = document.querySelector('.i-10').value;
    document.querySelector('.out-10').textContent = data * 20;
}

// Task 11.
document.querySelector('.b-11').onclick = function t11() {
    let data = document.querySelector('.i-11').value;
    document.querySelector('.out-11').textContent = data + 55;
}

// Task 12.
let lastName = document.querySelector('.i-12-1').value;
let firstName = document.querySelector('.i-12-2').value;
function t12() {
    document.querySelector('.out-12').textContent = `Hello ${lastName} ${firstName}`;
}


document.querySelector('.b-12').onclick = t12;

// Task 13.

function t13() {
    let number1 = +document.querySelector('.i-13-1').value;
    let number2 = +document.querySelector('.i-13-2').value;
    document.querySelector('.out-13').textContent = number1 + number2;
}

document.querySelector('.b-13').onclick = t13;

// Task 14.

document.querySelector('.b-14').onclick = function t14() {
    document.querySelector('.i-14').value = 'Go';
}
// Task 15.

document.querySelector('.b-15').onclick = function t15() {
    document.querySelector('.i-15').style.border = '4px solid red';
}

// Task 16.

document.querySelector('.b-16').onclick = function t16() {
    let i1 = document.querySelector('.i-16-1').value;
    let i2 = document.querySelector('.i-16-2').value;
    document.querySelector('.out-16').textContent = i1 + i2;
}

// Task 17.


document.querySelector('.b-17').onclick = function t17() {
    let data = document.querySelector('.i-17').value;
    document.querySelector('.out-17').textContent = parseInt(data);
}

// Task 18.


document.querySelector('.b-18').onclick = function t18() {
    let data = document.querySelector('.out-18').textContent = parseFloat(data);
}

// Task 19.

function t19() {
    let number1 = +document.querySelector('.i-19-1').value;    
    let number2 = +document.querySelector('.i-19-2').value;
    let output = document.querySelector('.out-19');
    if (number1 < 0 && number2 < 0){
        output.textContent = number1 + number2;
    }
    else{
        output.textContent = "Ваші числа не від'ємні";
    }
}

document.querySelector('.b-19').onclick = t19;

// Task 20
let count = 0;

function t20() {
    count++;
    let out = document.querySelector('.out-20');
    out.textContent = count.toString;
}

document.querySelector('.b-20').onclick = t20;