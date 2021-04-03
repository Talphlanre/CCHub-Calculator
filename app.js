function dis(val){
    const display = document.getElementById("result")
    display.value += val
}
function solve() {
    const display = document.getElementById('result')
    let n = display.value;
    let m = eval(n);
    display.value = m;
}
function del() {
    const display =document.getElementById('result');
    display.value = '';
}
function x2(){
    const display =document.getElementById('result')
    display.value = Math.pow(display.value, 2)
}
function x3(){
    const display =document.getElementById('result')
    display.value = Math.pow(display.value, 3)
}
function x4(){
    const display =document.getElementById('result')
    display.value = Math.pow(display.value, 4)
}
function x5(){
    const display =document.getElementById('result')
    display.value = Math.pow(display.value, 5)
}
function x6(){
    const display =document.getElementById('result')
    display.value = Math.pow(display.value, 6)
}
function x7(){
    const display =document.getElementById('result')
    display.value = Math.pow(display.value, 7)
}
function x9(){
    const display =document.getElementById('result')
    display.value = Math.pow(display.value, 9)
}

// sin

function sin(){
    const display= document.getElementById('result')
    display.value = Math.sin(display.value*(Math.PI/180))
}
function sinh(){
    const display= document.getElementById('result')
    display.value = Math.sinh(display.value)
}
function asin(){
    const display= document.getElementById('result')
    display.value = Math.asin(display.value)
}
function asinh(){
    const display= document.getElementById('result')
    display.value = Math.asinh(display.value)
}
// cos
function cos(){
    const display= document.getElementById('result')
    display.value = Math.cos(display.value*(Math.PI/1/180))
}
function cosh(){
    const display= document.getElementById('result')
    display.value = Math.cosh(display.value)
}
function acos(){
    const display= document.getElementById('result')
    display.value = Math.acos(display.value)
}
function acosh(){
    const display= document.getElementById('result')
    display.value = Math.acosh(display.value)
}

// tan

function tan(){
    const display= document.getElementById('result')
    display.value = Math.tan(display.value*(Math.PI/180))
}
function tanh(){
    const display= document.getElementById('result')
    display.value = Math.tanh(display.value)
}
function atan(){
    const display= document.getElementById('result')
    display.value = Math.atan(display.value)
}
function atanh(){
    const display= document.getElementById('result')
    display.value = Math.atanh(display.value)
}

// Cot

function cot(){
    const display= document.getElementById('result')
    display.value = 1/Math.cot(display.value*(Math.PI/180))
}
function coth(){
    const display= document.getElementById('result')
    display.value = 1/Math.coth(display.value)
}

// math functions

function log(){
    const display = document.getElementById('result');
    display.value = Math.log10(display.value)
}
function ln(){
    const display = document.getElementById('result');
    display.value = Math.log(display.value)
}

// root functions

function cube(){
    const display = document.getElementById('result');
    display.value = Math.cbrt(display.value);
}

function rootFour(){
    const display = document.getElementById('result');
    display.value = Math.pow(display.value, 1/4);
}

function rootFive(){
    const display = document.getElementById('result');
    display.value = Math.pow(display.value, 1/5);
}

function squareRoot(){
    const display = document.getElementById('result');
    display.value = Math.sqrt(display.value);
}