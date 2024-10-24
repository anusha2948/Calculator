let display = document.getElementById('display');

function appendToDisplay(value) {
  if (display.value === '0') {
    display.value = value;
  } else {
    display.value += value;
  }
}

function todeleteLast() {
  if (display.value.length > 1) {
    display.value = display.value.slice(0, -1);
  } else {
    display.value = '0'; 
  }
}

function toclearDisplay() {
  display.value = '0';
}

function tocalculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
