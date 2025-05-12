// Seleccionar todos los botones y contadores
const counters = {
    gold: document.querySelector('.counter__gold'),
    strength: document.querySelector('.counter__strength'),
    magic: document.querySelector('.counter__magic'),
    victory: document.querySelector('.counter__victory'),
};

// Función genérica para manejar incrementos
function handleIncrement(counter) {
    let currentValue = parseInt(counter.innerText) || 0;
    counter.innerText = currentValue + 1;
}

// Función genérica para manejar decrementos
function handleDecrement(counter) {
    let currentValue = parseInt(counter.innerText) || 0;
    if (currentValue > 0) {
        counter.innerText = currentValue - 1;
    }
}

// Asignar eventos a los botones
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const action = button.id.split('__')[0]; // "plus" o "less"
        const type = button.id.split('__')[1]; // "gold", "strength", etc.

        if (action === 'plus') {
            handleIncrement(counters[type]);
        } else if (action === 'less') {
            handleDecrement(counters[type]);
        }
    });
});
