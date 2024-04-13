const countSpan = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');

let count = 0;

function updateCount() {
    countSpan.textContent = count;
}

incrementBtn.addEventListener('click', () => {
    count++;
    updateCount();
});

decrementBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
        updateCount();
    }
});
