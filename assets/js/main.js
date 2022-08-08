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

document.querySelectorAll('.form__selector .form__selector-options li').forEach((el) => {
    el.addEventListener('click', (e) => {
        e.target.parentNode.parentNode.querySelector('input').value = e.target.innerHTML;
    })
})

document.querySelector('.mobile-navigation__button').addEventListener('click', (e) => {
    if (document.querySelector('.mobile-navigation__navigation').classList.contains('mobile-navigation__navigation_active')) {
        document.querySelector('.mobile-navigation__navigation').classList.remove('mobile-navigation__navigation_active');
    } else {
        document.querySelector('.mobile-navigation__navigation').classList.add('mobile-navigation__navigation_active');
    }
})

document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('mobile-navigation__link') && !e.target.classList.contains('mobile-navigation__button')) {
        document.querySelector('.mobile-navigation__navigation').classList.remove('mobile-navigation__navigation_active');
    }
})

if (document.querySelector('.glide')) {
    let glide = new Glide(document.querySelector('.glide'), {
        type: 'carousel',
        perView: 3,
        gap: 10,
        autoplay: 3000
    })

    glide.mount()
}
