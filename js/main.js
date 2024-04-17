// ВИКА: первый фрейм
// анимация лого в хедере
const headerLogo = document.querySelector(".header__logo");
const newImageSrc = "./icons/logo-static.svg";

function changeLogoToStatic() {
  loadLogo(newImageSrc)
    .then((loadedImage) => {
      headerLogo.src = loadedImage.src;
    })
    .catch((error) => {
      console.error("Ошибка загрузки лого:", error);
    });
}

function loadLogo(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

setTimeout(() => {
  changeLogoToStatic();
}, 1000);

// анимация текста в первом фрейме
const headingAnimationFirst = document.querySelector(".js-heading-first-move");
const headingAnimationSecond = document.querySelector(
  ".js-heading-second-move"
);
const headingAnimationBoth = document.querySelector(
  ".section-heading-text__flex-move"
);

const headingAnimationGreenBg = document.querySelector(".section-heading__h1");

gsap.from(headingAnimationFirst, { opacity: 0, x: -300, duration: 1 });
gsap.from(headingAnimationSecond, { opacity: 0, x: -300, duration: 2 });

window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const opacity = 1 - Math.max(0, Math.min(scrollTop / 120, 1));

  headingAnimationBoth.style.transform = `translateY(${scrollTop * 0.5}px)`;
  headingAnimationBoth.style.opacity = opacity.toString();

  headingAnimationGreenBg.style.opacity = opacity.toString();
});

// ВИКА: второй фрейм — анимация при скролле

const whyHeading = document.querySelector(".main__why__heading");

const reasonWhyOneHeading = document.querySelector(
  ".main__why__reason-one__heading"
);
const reasonWhyOneText = document.querySelector(
  ".main__why__reason-one__paragraph"
);

const reasonWhyTwoHeading = document.querySelector(
  ".main__why__reason-two__heading"
);
const reasonWhyTwoText = document.querySelector(
  ".main__why__reason-two__paragraph"
);

const reasonWhyThreeHeading = document.querySelector(
  ".main__why__reason-three__heading"
);
const reasonWhyThreeText = document.querySelector(
  ".main__why__reason-three__paragraph"
);

const reasonWhyFour = document.querySelector(".main__why__reason-four");

const reasonWhyFive = document.querySelector(".main__why__reason-five");

const twoPandas = document.querySelector(".main__why__two-pandas");
const onePanda = document.querySelector(".main__why__one-panda");

function isElementInViewport(el, offset = 0) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= -offset &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) + offset &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  if (isElementInViewport(reasonWhyTwoHeading, 450)) {
    gsap.from(whyHeading, { opacity: 0.3, y: -50, delay: 0.3 });

    gsap.from(reasonWhyOneHeading, { opacity: 0, x: -50, delay: 0.6 });
    gsap.from(reasonWhyTwoHeading, { opacity: 0, x: -50, delay: 1.2 });
    gsap.from(reasonWhyThreeHeading, { opacity: 0, x: -50, delay: 1.8 });

    gsap.from(reasonWhyOneText, { opacity: 0, delay: 0.6 });
    gsap.from(reasonWhyTwoText, { opacity: 0, delay: 1.2 });
    gsap.from(reasonWhyThreeText, { opacity: 0, delay: 1.8 });

    gsap.from(reasonWhyFour, { opacity: 0, x: 40, delay: 1.9 });
    gsap.from(reasonWhyFive, { opacity: 0, x: 40, delay: 2.2 });

    gsap.from(twoPandas, { opacity: 0, y: -50, delay: 0.4 });
    gsap.from(onePanda, { opacity: 0, y: -50, delay: 1 });

    window.removeEventListener("scroll", handleScroll);
  }
}

window.addEventListener("scroll", handleScroll);

// Андрей: третий фрейм 
const sliderItems = document.querySelectorAll(".travel-examples-slider__item");

sliderItems.forEach(item => {

  item.addEventListener('mouseenter', () => {
    gsap.to(item, {
      duration: 0.3,
      scale: 1.1,
      ease: "power2.inOut"
    });
  });

  item.addEventListener('mouseleave', () => {
    gsap.to(item, {
      duration: 0.3,
      scale: 1,
      ease: "power2.inOut"
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Получаем элемент, до которого нужно доскроллить
  const frame = document.querySelector('.travel-examples-slider__container');
  
  // Добавляем слушатель события скролла
  window.addEventListener('scroll', () => {
    // Получаем позицию фрейма относительно верха страницы
    const framePosition = frame.getBoundingClientRect().top;
    
    // Проверяем, достиг ли пользователь фрейма
    if (framePosition < window.innerHeight) {
      // Если достиг, запускаем вашу анимацию
      gsap.to('.travel-examples-slider__heading-3', {
        x: 0,
        delay: .8,
        ease: 'none',
        duration: 1.3,
      });
      gsap.to('.travel-examples-slider__paragraph', {
        x: 0,
        ease: 'none',
        delay: 1,
        duration: 1.3,
      });
      gsap.to('.travel-examples-slider__item-japan', {
        y: 0,
        ease: 'none',
        opacity: 1,
        delay: .8,
        duration: 1.3,
      });
      gsap.to('.travel-examples-slider__item-india', {
        y: 0,
        ease: 'none',
        opacity: 1,
        delay: 1,
        duration: 1.3,
      });
      gsap.to('.travel-examples-slider__item-china', {
        y: 0,
        ease: 'none',
        opacity: 1,
        delay: 1,
        duration: 1.3,
      });
    }
  });
});


// ДАНЯ: ФРЕЙМ 5 НАЧАЛО
document.querySelector('.js-main__want-here__button-prev').addEventListener('click', prevButton);
document.querySelector('.js-main__want-here__button-next').addEventListener('click', nextButton);

const sliders = document.querySelectorAll('.js-main__want-here__slide');

let currentSlide = 0;

sliders[0].classList.add('js-main__want-here__active');

function prevButton() {
  sliders[currentSlide].classList.remove('js-main__want-here__active');
  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = sliders.length - 1;
  }

  sliders[currentSlide].classList.add('js-main__want-here__active');

  gsap.fromTo(document.querySelectorAll('.js-main__want-here__background'), { scale: 1 }, { scale: 1.1, duration: 1 });
}

function nextButton() {
  sliders[currentSlide].classList.remove('js-main__want-here__active');
  currentSlide++;

  if (currentSlide >= sliders.length) {
    currentSlide = 0;
  }

  sliders[currentSlide].classList.add('js-main__want-here__active');

  gsap.fromTo(document.querySelectorAll('.js-main__want-here__background'), { scale: 1 }, { scale: 1.1, duration: 1 });
}
// ДАНЯ: ФРЕЙМ 5 КОНЕЦ

// ДАНЯ: ФРЕЙМ 6 НАЧАЛО
function animateInspiringStories() {
  gsap.set('.js-main__inspiring-stories__item', { opacity: 0 });
  gsap.set('.js-main__inspiring-stories__text', { opacity: 0 });
  gsap.set('.js-main__inspiring-stories__color', { opacity: 0 });

  gsap.from('.js-main__inspiring-stories__heading', { duration: 1, y: -130, onComplete: animateItems });

  function animateItems() {
    const items = document.querySelectorAll('.js-main__inspiring-stories__item');

    gsap.from(items, { duration: 1, y: 100, onComplete: animateTextAndColor });

    items.forEach(function (item, index) {
      gsap.to(item, { opacity: 1, duration: 0.5, delay: 0.1 * index });
    });

    function animateTextAndColor() {
      gsap.to('.js-main__inspiring-stories__text, .js-main__inspiring-stories__color', { opacity: 1, duration: 0.1 });

      items.forEach(function (item) {
        const text = item.querySelector('.js-main__inspiring-stories__text');
        const color = item.querySelector('.js-main__inspiring-stories__color');

        item.addEventListener('mouseenter', function () {
          gsap.to(this, { duration: 0.3, scale: 1.1 });
          gsap.to(text, { duration: 0.3, bottom: '215px' });
          gsap.to(color, { duration: 0.3, height: '100%' });
        });

        item.addEventListener('mouseleave', function () {
          gsap.to(this, { duration: 0.3, scale: 1 });
          gsap.to(text, { duration: 0.3, bottom: '85px' });
          gsap.to(color, { duration: 0.3, height: '250px' });
        });
      });
    }
  }
}

ScrollTrigger.create({
  trigger: ".js-main__inspiring-stories__heading",
  start: "top 95%",
  onEnter: animateInspiringStories,
  once: true
});
// ДАНЯ: ФРЕЙМ 6 КОНЕЦ

//ВИКА: седьмой фрейм
//Код отправки данных на сервер

const form = document.querySelector('.main__feedback__form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);

    const url = 'http://127.0.0.1:8000/enquires/';

    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Сетевая ошибка');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Произошла проблема с вашим запросом:', error);
    });
});