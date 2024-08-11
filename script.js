let display = document.getElementById('display');

// Function to update the display
function updateDisplay(value) {
    if (display.innerText === '0' && value !== '.') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

// Function to handle display reset
function clearDisplay() {
    display.innerText = '0';
}

// Function to calculate the result
function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = 'Error';
    }
}

// Function to handle keypress events
function handleKeyboardInput(event) {
    const key = event.key;
    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', 'Enter', 'Backspace', 'Escape'];
    
    if (validKeys.includes(key)) {
        switch (key) {
            case 'Enter':
                calculateResult();
                break;
            case 'Backspace':
                display.innerText = display.innerText.slice(0, -1) || '0';
                break;
            case 'Escape':
                clearDisplay();
                break;
            default:
                updateDisplay(key);
                break;
        }
    }
}

// Attach the keyboard event listener
document.addEventListener('keydown', handleKeyboardInput);
