document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('inputBox');
    const buttons = document.querySelectorAll('button');

    let expression = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const action = button.dataset.action;
            const value = button.textContent;

            if (action === 'clear') {
                expression = '';
            } else if (action === 'delete') {
                expression = expression.slice(0, -1);
            } else if (action === 'calculate') {
                try {
                    expression = eval(expression);
                } catch (error) {
                    expression = 'Error';
                }
            } else {
                expression += value;
            }

            input.value = expression;
        });
    });
});
