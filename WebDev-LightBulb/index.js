    let isOpen = false;
    let btn = document.querySelector(".switch")
    btn.addEventListener("click", function () {
        if (isOpen) {
            btn.classList.remove("on");
            isOpen = false;
        }
        else {
            btn.classList.add("on");
            isOpen = true;
        }
    })  
    let bulbbottom = document.querySelector(".bulb-bottom")
    let bulbtop = document.querySelector(".bulb-top")
    btn.addEventListener("click", function () {
        if (isOpen) {
            bulbbottom.classList.add("bulbon");
            bulbtop.classList.add("bulbon");
            isOpen = true;
        }
        else {
            bulbtop.classList.remove("bulbon");
            bulbbottom.classList.remove("bulbon");
            isOpen = false;
        }
    })