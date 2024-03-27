function appendToResult(value) {
    document.getElementById("result").value += value;
}

function clearResult() {
    document.getElementById("result").value = "";
}

function calculate() {
    let result = document.getElementById("result").value;
    try {
        let answer = eval(result);
        document.getElementById("result").value = answer;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}

function toggleDarkMode() {
    const calculator = document.querySelector(".calculator");
    calculator.classList.toggle("dark-mode");
}
