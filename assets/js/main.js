document.querySelectorAll('.addresses__selector li').forEach((el) => {
    el.addEventListener('click', (e) => {
        const item = e.target.dataset.select;
        document.querySelector('.addresses__selector_active').classList.remove('addresses__selector_active');
        e.target.classList.add('addresses__selector_active');
        document.querySelector('.addresses .item_active').classList.remove('item_active');
        document.querySelector(`.addresses [data-item="${item}"]`).classList.add('item_active');
    });
})

document.querySelectorAll('.schedule__selector li').forEach((el) => {
    el.addEventListener('click', (e) => {
        const item = e.target.dataset.select;
        document.querySelector('.schedule__selector_active').classList.remove('schedule__selector_active');
        e.target.classList.add('schedule__selector_active');
        document.querySelector('.schedule .item_active').classList.remove('item_active');
        document.querySelector(`.schedule [data-item="${item}"]`).classList.add('item_active');
    });
})
