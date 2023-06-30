// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function clearScreen() {
    document.getElementById("result").value = "";
}

function Display(value) {
    document.getElementById("result").value += value;
}
function calculate() {
    let x = String(inputElement.value);
    let res = eval(x.substring(0, x.length - 1));
    document.getElementById("result").value = res;
}

function backSpace() {
    let y = String(document.getElementById("result").value)
    document.getElementById("result").value = y.substring(0, y.length - 1);
}


const inputElement = document.getElementById("result");
inputElement.addEventListener("input", inputEvent);

function inputEvent(event) {
    if (event.data == "=")
        calculate();
}