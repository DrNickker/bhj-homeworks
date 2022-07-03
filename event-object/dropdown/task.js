let btn = document.querySelector('.dropdown__value');
let list = document.querySelector('.dropdown__list');
let links = document.querySelectorAll('a');

list.className
btn.addEventListener('click', open);

function open(event) {

    if (list.className === 'dropdown__list') {
        list.className = 'dropdown__list dropdown__list_active';
    } else {
        list.className = 'dropdown__list';
    }
}

for (let link of links) {
    link.addEventListener('click', rename);
}

function rename(event) {
    event.preventDefault();
    btn.textContent = event.target.textContent;
    list.className = 'dropdown__list';
}


