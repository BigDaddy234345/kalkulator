const calc = document.querySelector('.calc');
const result = document.querySelector('#result');

calc.addEventListener('click', function(event) {
    if (!event.target.classList.contains('calc_btn')) return;

    const value = event.target.innerText;

    switch(value) {
        case 'C':
            result.innerText = '';
            break;

        case '=':
            try {
                const evaluated = eval(result.innerText);
                result.innerText = isFinite(evaluated) ? Number(evaluated).toFixed(2) : 'Error';
            } catch (e) {
                result.innerText = 'Error';
            }
            break;

        default:
            result.innerText += value;
    }
});