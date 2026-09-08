const operations = {
  add: {
    label: "Addition",
    symbol: "+",
    calculate: (first, second) => first + second,
  },
  subtract: {
    label: "Subtraction",
    symbol: "−",
    calculate: (first, second) => first - second,
  },
  multiply: {
    label: "Multiplication",
    symbol: "×",
    calculate: (first, second) => first * second,
  },
  divide: {
    label: "Division",
    symbol: "÷",
    calculate: (first, second) => first / second,
  },
  modulus: {
    label: "Modulus",
    symbol: "%",
    calculate: (first, second) => first % second,
  },
};

let selectedOperation = "add";

const operationButtons = document.querySelectorAll(".operation-button");
const operatorPreview = document.querySelector(".operator-preview");
const form = document.querySelector("#calculator-form");
const firstInput = document.querySelector("#first-number");
const secondInput = document.querySelector("#second-number");
const formMessage = document.querySelector("#form-message");
const equation = document.querySelector("#equation");
const resultValue = document.querySelector("#result-value");

function formatNumber(value) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 12,
  }).format(value);
}

function showMessage(message = "") {
  formMessage.textContent = message;
}

function selectOperation(operationKey) {
  selectedOperation = operationKey;
  const operation = operations[operationKey];

  operationButtons.forEach((button) => {
    const isActive = button.dataset.operation === operationKey;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  operatorPreview.textContent = operation.symbol;
  showMessage();
}

operationButtons.forEach((button) => {
  button.setAttribute("aria-pressed", button.classList.contains("active") ? "true" : "false");
  button.addEventListener("click", () => selectOperation(button.dataset.operation));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  showMessage();

  const firstRaw = firstInput.value.trim();
  const secondRaw = secondInput.value.trim();

  if (firstRaw === "" || secondRaw === "") {
    showMessage("Please enter both numbers before calculating.");
    (firstRaw === "" ? firstInput : secondInput).focus();
    return;
  }

  const first = Number(firstRaw);
  const second = Number(secondRaw);

  if (!Number.isInteger(first) || !Number.isInteger(second)) {
    showMessage("Please use whole numbers only.");
    return;
  }

  if ((selectedOperation === "divide" || selectedOperation === "modulus") && second === 0) {
    showMessage(`${operations[selectedOperation].label} by zero is not defined.`);
    secondInput.focus();
    return;
  }

  const operation = operations[selectedOperation];
  const answer = operation.calculate(first, second);
  const formattedAnswer = formatNumber(answer);

  equation.textContent = `${formatNumber(first)} ${operation.symbol} ${formatNumber(second)} =`;
  resultValue.textContent = formattedAnswer;
  document.querySelector("#result-panel").classList.add("has-result");
});

document.querySelector("#current-year").textContent = new Date().getFullYear();