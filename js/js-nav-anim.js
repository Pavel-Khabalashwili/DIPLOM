// Анимрование списков навигации
let listItemHeader = document.querySelectorAll(".nav__link-item");
let listItemFooter = document.querySelectorAll(".footer__link");
console.log(listItemFooter)

let listItem = [...listItemHeader, ...listItemFooter];
console.log(listItem);
 

listItem.forEach(function(element){
  element.classList.add("hvr-grow-shadow");
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