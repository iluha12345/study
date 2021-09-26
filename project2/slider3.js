/* Устанавливаем индекс слайда по умолчанию */
let slideIndex2 = 1;
showSlides2(slideIndex2);

/* Увеличиваем индекс на 1 — показываем следующий слайд*/
function nextSlide2() {
    showSlides2(slideIndex2 += 1);
}

/* Уменьшает индекс на 1 — показываем предыдущий слайд*/
function previousSlide2() {
    showSlides2(slideIndex2 -= 1);  
}

/* Устанавливаем текущий слайд */
function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

/* Функция перелистывания */
function showSlides2(n) {
    let i;
    let slides = document.getElementsByClassName("item2");
    
    if (n > slides.length) {
      slideIndex2 = 1
    }
    if (n < 1) {
        slideIndex2 = slides.length
    }
  
  /* Проходим по каждому слайду в цикле for */
    for (let slide of slides) {
        slide.style.display = "none";
    }   
    slides[slideIndex2 - 1].style.display = "block"; 
}