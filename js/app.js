const input = document.getElementById("binary-input");
const output = document.getElementById("decimal-output");
const root = document.documentElement;

/**
 * Check if the input is a valid binary number
 */

function isValidBinary(binary) {
    return /^[01]+$/.test(binary);
}

input.addEventListener("input", function () {
    if (root.style.getPropertyValue("--output-opacity") == 0) {
        root.style.setProperty("--output-opacity", 1);
    } else if (input.value.length == 0) {
        root.style.setProperty("--output-opacity", 0);
    }
    if (isValidBinary(input.value)) {
        output.textContent = parseInt(input.value, 2);
    } else {
        output.textContent = "Please enter a valid binary number";
    }
});

input.addEventListener("focus", function () {
    root.style.setProperty("--border-width", 100 + "%");
});

input.addEventListener("blur", function () {
    root.style.setProperty("--border-width", 0);
});
