let popup = document.querySelector('#modal_main');
let close = document.querySelectorAll('div.modal__close');
let successBtn = document.querySelector('.show-success');
let success = document.querySelector('#modal_success');


popup.className = 'modal modal_active';
close[0].onclick = function () {
    popup.className = 'modal';
};

successBtn.onclick = function () {
    success.className = 'modal modal_active';
};

close[1].onclick = function () {
    popup.className = 'modal';
    success.className = 'modal';
};