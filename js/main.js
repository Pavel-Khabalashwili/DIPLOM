// SWIPER ----------------------------------

const swiper = new Swiper('.swiper', {

  // Размещение навигации
  direction: 'horizontal',
  loop: true,

  // Пагинация
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },


  // Автопрокрутка
  autoplay: {
    delay: 5000,
  },

});
// -----------------------------------------

// OWL CAROUSEL-----------------------------

// Определение slider и его функций
let owl = $('.owl-carousel');
owl.owlCarousel({
  // center: true,
  loop: true,
  margin: 45,
  items: 3,
  startPosition: 0,
  mouseDrag: false,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive : {
    320 : {
      items: 1,
    },
    769 : {
      items: 2,
    },
    992 : {
      items: 1,
    },
    1200 : {
      items: 2,
    },
    1366 : {
      items: 3,
    },
  }
});

// Определение кнопок slider и их функционал
// Кнопка вперед
$('.slider__btn_next').click(function () {
  owl.trigger('next.owl.carousel');
})

// Кнопка назад
$('.slider__btn_prev').click(function () {
  owl.trigger('prev.owl.carousel');
})
// -----------------------------------------

// AUDIO PLAYER ----------------------------

// Объявление переменных
let audio = document.querySelectorAll(".audio"); // Само аудио
let platBtn = document.querySelectorAll(".audio__btn"); // Кнопка запуска / стопка
let imgBtn = document.querySelectorAll(".audio__btn-img"); // Картинка запуска / стопа
let timeBar = document.querySelectorAll(".audio__progress-bar-container"); // Контейнер для хронолог. линии аудио
let timeHolder = document.querySelectorAll(".audio_bar"); // Хронолог. линии аудио
let audioLine = document.querySelectorAll(".audio__line"); // Линия заполняющая хронологическую линию
let audioDescr = document.querySelectorAll(".reviews__name-age");
let isPlaying = false; 
let currentIndex = -1; // Переменная для работы с текущим элементом
let lastUsedIndex = 0;
let counter = 0;
// Зарустить плеер
function play(index) {
  isPlaying = true;
  imgBtn[index].src = "./img/reviews/pause.svg";
  audio[index].play();
};

// Остановить плеер
function stop(index) {
  isPlaying = false;
  imgBtn[index].src = "./img/reviews/play.svg";
  audio[index].pause();
};

// Дейтвия по нажатию
platBtn.forEach(function (element, index) {
  element.addEventListener("click", function () {

    counter++
    currentIndex = index;

    // ФИКС одновременного включения 2-ух плееров (в таком случае один плеер остановиться)
    if (counter !== 1 && currentIndex !== lastUsedIndex){
      stop(lastUsedIndex);
      platBtn[lastUsedIndex].classList.remove("audio__btn--active");
      timeBar[lastUsedIndex].classList.remove("audio__progress-bar-container_active");
      audioDescr[lastUsedIndex].classList.remove("reviews__name-age_opacity");
    }

    if (isPlaying) {
      stop(index);
      platBtn[index].classList.remove("audio__btn--active");
      timeBar[index].classList.remove("audio__progress-bar-container_active");
      audioDescr[index].classList.remove("reviews__name-age_opacity");
    }else{
      play(index);
      platBtn[index].classList.add("audio__btn--active");
      timeBar[index].classList.add("audio__progress-bar-container_active");
      audioDescr[index].classList.add("reviews__name-age_opacity");
    }

    lastUsedIndex = currentIndex;

  })
});


// Хронологическая линия аудио

function updateProgress(e) {

  let { duration, currentTime } = e.srcElement;
  let progressPercent = (currentTime / duration) * 100;
  audioLine[currentIndex].style.width = `${progressPercent}%`;
};

audio.forEach(function (element) {
  element.addEventListener('timeupdate', updateProgress);
});


// Взаимодействие с хронологической линией аудио
function setProgress(e) {
  let width = this.clientWidth;
  let clickX = e.offsetX;
  let duration = audio[currentIndex].duration;

  audio[currentIndex].currentTime = (clickX / width) * duration

};

timeHolder.forEach(function (element) {
  element.addEventListener("click", setProgress);
});

audio.forEach(function (element, index) {
  element.addEventListener("ended", function () {
    stop(index);
    platBtn[index].classList.remove("audio__btn--active");
    timeBar[index].classList.remove("audio__progress-bar-container_active");
    audioDescr[index].classList.remove("reviews__name-age_opacity");
  });
});

// -----------------------------------------

// Отслеживает блокнот и при размере 992 убираем его
let notebook = document.querySelector(".question");

if (window.matchMedia("(min-width: 992px)").matches) {
  /* the viewport is at least 400 pixels wide */
} else {
  notebook.classList.remove("question__bg");
}
