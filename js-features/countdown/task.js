const seconds = document.getElementById("timer");

const timer = setInterval(()=>{
    seconds.innerText--;
    if (seconds.innerText ==0) {
        alert ("Вы победили в конкурсе");
        clearInterval(timer);
    }



}, 1000)