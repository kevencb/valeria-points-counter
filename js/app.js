document.addEventListener('DOMContentLoaded', () => {
    const btn_more_gold = document.querySelector('#plus__gold');
    const btn_less_gold = document.querySelector('#less__gold');

    const btn_more_strength = document.querySelector('#plus__strength');
    const btn_less_strength = document.querySelector('#less__strength');

    const btn_more_magic = document.querySelector('#plus__magic');
    const btn_less_magic = document.querySelector('#less__magic');

    const btn_more_victory = document.querySelector('#plus__victory');
    const btn_less_victory = document.querySelector('#less__victory');

    const counter_gold = document.querySelector('#counter__gold');
    const counter_strength = document.querySelector('#counter__strength');
    const counter_magic = document.querySelector('#counter__magic');
    const counter_victory = document.querySelector('#counter__victory');

    function setupCounter(btnMore, btnLess, counter) {
        btnMore.addEventListener('click', () => {
            let currentValue = parseInt(counter.innerText) || 0;
            counter.innerText = currentValue + 1;
        });

        btnLess.addEventListener('click', () => {
            let currentValue = parseInt(counter.innerText) || 0;
            if (currentValue > 0) {
                counter.innerText = currentValue - 1;
            }
        });
    }

    setupCounter(btn_more_gold, btn_less_gold, counter_gold);
    setupCounter(btn_more_strength, btn_less_strength, counter_strength);
    setupCounter(btn_more_magic, btn_less_magic, counter_magic);
    setupCounter(btn_more_victory, btn_less_victory, counter_victory);
});