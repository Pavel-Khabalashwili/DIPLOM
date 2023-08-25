// РАБОТА С МОДАЛЬНЫМ ОКНОМ
let module = document.querySelector(".modal"); // Находим обертку для модального окна
let moduleBox = document.querySelector(".modal__box"); // Находим само модальное окно
let moduleOpenBtn = document.querySelectorAll(".services__item"); // Находим все кнопки для вызова модлаьного окна
let moduleCloseBtn = document.querySelector(".modal__btn-wrapper"); // Находим Кнопку закрытия модального окна
let elem = document.querySelectorAll(".modal__content-wrapper"); // находим каждое описания к курсу
let moduleContent = document.querySelector(".modal_append"); // находим блок в который поместиться описание к курс
let currentBlock; // Отслеживание текущего индекса активированной карточки товаров

elem.forEach(function(element){
  element.classList.add("services__hide-block");
});

// ОТКРЫТИЕ МОДАЛЬНОГО ОКНА
moduleOpenBtn.forEach(function(element, index){
  element.addEventListener("click", function(){
    elem[index].classList.remove("services__hide-block");
    moduleBox.classList.remove("animate__fadeOutDown");
    module.classList.add("open");
    moduleBox.classList.add("animate__backInDown");
    moduleCloseBtn.classList.add("animate__bounceInDown");
    document.body.classList.add("stop-scroll");
    moduleContent.appendChild(elem[index]);
    currentBlock = index;

  });
});

// ЗАКРЫТИЕМОДАЛЬНОГО ОКНА
moduleCloseBtn.addEventListener("click", function(){
    moduleBox.classList.remove("animate__fadeInDown");
    moduleCloseBtn.classList.remove("animate__bounceInDown");
    moduleBox.classList.add("animate__fadeOutDown");
    setTimeout(function() {
      moduleContent.removeChild(elem[currentBlock]);
      module.classList.remove("open");
      document.body.classList.remove("stop-scroll");
    }, 900);
});

// ЗАКРЫТИЕ ОКНА ПРИ ПРОЖАТИИ КНОПКИ Esc
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    moduleBox.classList.remove("animate__fadeInDown");
    moduleCloseBtn.classList.remove("animate__bounceInDown");
    moduleBox.classList.add("animate__fadeOutDown");
    setTimeout(function() {
      moduleContent.removeChild(elem[currentBlock]);
      module.classList.remove("open");
      document.body.classList.remove("stop-scroll");
    }, 900);
  }
});

// Закрыть модальное окно при клике вне его
moduleBox.addEventListener('click', event => {
  event._isClickWithInModal = true;
});
module.addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  moduleBox.classList.remove("animate__fadeInDown");
    moduleCloseBtn.classList.remove("animate__bounceInDown");
    moduleBox.classList.add("animate__fadeOutDown");
    setTimeout(function() {
      moduleContent.removeChild(elem[currentBlock]);
      module.classList.remove("open");
      document.body.classList.remove("stop-scroll");
    }, 900);
});

