const display = document.getElementById("display");

let expression = "";

function addValue(value) {
    if (expression === "" && ["+", "-", "*", "/"].includes(value)) {
        return;
    }

    expression += value;
    display.textContent = expression;
}

function clearDisplay() {
    expression = "";
    display.textContent = "0";
}

function calculate() {
    try {
        const result = eval(expression);

        if (result === undefined) {
            display.textContent = "Erro";
            expression = "";
            return;
        }

        display.textContent = result;
        expression = result.toString();

    } catch {
        display.textContent = "Erro";
        expression = "";
    }
}