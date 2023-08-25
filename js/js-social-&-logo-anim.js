//анимирование иконок и лого в header
let headerLogo = document.querySelector(".nav__link");
let iconList = document.querySelectorAll(".social__link");


iconList.forEach(function (element) {
    element.classList.add("fcs-outline-in-white");
    element.classList.add("hvr-grow-shadow");

    headerLogo.classList.add("fcs-outline-in-white");
    headerLogo.classList.add("hvr-grow-shadow");

    element.addEventListener("click", function () {
        element.classList.remove("hvr-grow-shadow");
        element.classList.add("actv-push");
        element.classList.add("actv-push--active");

        headerLogo.classList.remove("hvr-grow-shadow");
        headerLogo.classList.add("actv-push");
        headerLogo.classList.add("actv-push--active");
        setTimeout(function () {
            element.classList.remove("actv-push--active");
            element.classList.add("hvr-grow-shadow");

            headerLogo.classList.remove("actv-push--active");
            headerLogo.classList.add("hvr-grow-shadow");
        }, 315);
    });
});