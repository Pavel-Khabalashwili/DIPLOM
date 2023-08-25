let spamForm = document.querySelector(".footer__form"); // Находим форму в подвале страницы
let triggerForm = false;


// Форма рассылки
new window.JustValidate('.js-form-spam', {
  
    rules:{
      mail:{
        required: true,
        email: true,
      },
    },
  
    messages: {
      mail: {
        required: 'Поле обязательно для заполнения ',
        email: 'Некорректный ввод',
      },
  
      tooltip: {
        fadeOutTime: 4000,
      },
    },
    colorWrong: 'var(--blue)',

    // Если ввод верный, то - код ниже (FooterForm)
    submitHandler: function (form, values, ajax) {
      triggerForm = true;
      // Анимация отправки сообщения
      spamForm.classList.remove("animate__bounce");
      spamForm.classList.add("animate__zoomOutUp");
      setTimeout(function() {
        spamForm.classList.add("hide-block");
      }, 2500);

      // Отправка сообщения

    },
  });


  $(document).ready(function () {
        
    //E-mail Ajax Send
    $(".form-mail").submit(function () { //Change
      if(!triggerForm){
        return false;
      }
      var th = $(this);
      $.ajax({
        type: "POST",
        url: "http://cz34920.tw1.ru/mail.php", //Change
        data: th.serialize()
      }).done(function (e) {
        
        console.log(e);
        setTimeout(function () {
          // Done Functions
          th.trigger("reset");
        }, 1000);
      }).fail(function(error){
        console.log(error);
      });
      return false;
    });
  
  });
  

  function sendMail(){
    console.log("I'm working");
  }
  // -----------------------------------------