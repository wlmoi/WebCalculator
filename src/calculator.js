// Calculator Logic (javascript)
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('#calculator button');
  const display = buttons[0];

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.textContent;
      if (value === '=') {
        try {
          display.textContent = eval(display.textContent);
        } catch {
          display.textContent = 'Error';
        }
      } else if (['+', '-', '*', '/'].includes(value)) {
        display.textContent += ` ${value} `;
      } else if (value === 'C') {
        display.textContent = '';
      } else {
        display.textContent += value;
      }
    });
  });
});
