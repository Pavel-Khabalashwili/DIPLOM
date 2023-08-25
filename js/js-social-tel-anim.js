// Анимирование телефонов
let telList = document.querySelectorAll(".social__tel");

telList.forEach(function(element){
  element.classList.add("hvr-grow-shadow");
  element.classList.add("fcs-outline-in-white");
  element.addEventListener("click", function(){
    element.classList.remove("hvr-grow-shadow")
    element.classList.add("actv-push");
    element.classList.add("actv-push--active");
    setTimeout(function() {
      element.classList.remove("actv-push--active");
      element.classList.add("hvr-grow-shadow");
    }, 315);
  });
});
