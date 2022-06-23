
let element = document.getElementsByClassName('modal_active');
for (var i = 0; i < modal_active.length; i++) {
    modal_active[i].addEventListener('click', changeClass, false);
}

function changeClass() {
    $(this).toggleClass('modal_success');
    $('.modal_active').not(this).removeClass('modal_success');
}













/* let element = document.getElementsByClassName('modal_active')[0];


function change() {
    element.width =100;
    element.height =100;  
};  

    img.onclick = change;



let success = document.getElementById('modal_success');

success.onclick = function () {
    success.className = "modal_success";
   
}

function f1 (e) {
   

}

element.addEventListener("click", f1)

 */

/* element[0].onclick = function () {
    element[0].className = "modal";
    //console.log(element[0]);
   // console.log(element);
}

let element1 = document.getElementById('modal_success');

element1.onclick = function () {
    element1.className = "show-success";
   
}

const showSuccess = document.getElementsByClassName("show-success");

showSuccess.onclick = function () {
    showSuccess.className = "modal_active";
   
} */