 let opens = document.getElementById('open_modal');
let modal = document.getElementById('modal');
let image1 = 'imgs/ic-menu-navigation.png'; // первая картинка
let image2 = 'imgs/ic-menu-navigation2.png'; // вторая картинка
let image = document.getElementById('button_image');
let login = document.getElementById('login')
let closelogin = document.getElementById('nazad')
let openlogin = document.getElementById('open_login')
let input = document.querySelector('.email');
let submit = document.getElementById('submit');
let regexp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

input.addEventListener('input', onInput);
submit.addEventListener('click', onSubmit);

function onInput() {
    if (isEmailValid(input.value)) {
        input.style.borderColor = 'green';
    } else {
        input.style.borderColor = 'red';
    }
}

function isEmailValid(value) {
    return regexp.test(value);
}

function onSubmit(event) {
    event.preventDefault(); // предотвращаем действие по умолчанию
    if (isEmailValid(input.value)) {
        window.location.href = '../logginedPage/index.html'; // укажите верный путь
    }
}
function loginopen (){
        openlogin.addEventListener('click', () => {
             if (login.style.display === 'none' || login.style.display === '') {
                    login.style.display = 'flex';
            } else {
                    login.style.display = 'none';
            }
        })
}
function closeLogin (){
        closelogin.addEventListener('click', () =>{
                login.style.display = 'none';
        })
}
loginopen()
closeLogin ()
function modalopen (){
    opens.addEventListener('click', () => {
         if (modal.style.display === 'none' || modal.style.display === '') {
                modal.style.display = 'flex';
        } else {
                modal.style.display = 'none';
        }
     });
}

opens.addEventListener('click', () => {
    if (image.src.includes(image1)) {
            image.src = image2; // меняем на вторую картинку
    } else {
            image.src = image1; // меняем обратно на первую картинку
    }
});

modalopen();
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
      speed:1200,
    slidesPerView: 4,


    spaceBetween: 10,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // mobile + tablet - 320-990
      1920: {
        slidesPerView:4
      },
      998: {
        slidesPerView: 3
      },
      778: {
        slidesPerView: 2
      },
      320: {
        slidesPerView: 1
      },
      10: {
        slidesPerView: 1
      },
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed:900,
    slidesPerView: 8,
    spaceBetween: 10,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });