// АНИМИРОВАНИЕ БЛОКОВ С КУРСАМИ

let courseBlock = document.querySelectorAll(".services__item");

courseBlock.forEach(function (element) {
    element.classList.add("hvr-grow-shadow");
    element.addEventListener("click", function () {
        element.classList.remove("hvr-grow-shadow")
        element.classList.add("actv-push");
        element.classList.add("actv-push--active");
        setTimeout(function () {
            element.classList.remove("actv-push--active");
            element.classList.add("hvr-grow-shadow");
        }, 315);
    });
});