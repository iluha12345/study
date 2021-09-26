/* Устанавливаем индекс слайда по умолчанию */
let slideIndex3 = 1;
showSlides3(slideIndex3);

/* Увеличиваем индекс на 1 — показываем следующий слайд*/
function nextSlide3() {
    showSlides3(slideIndex3 += 1);
}

/* Уменьшает индекс на 1 — показываем предыдущий слайд*/
function previousSlide3() {
    showSlides3(slideIndex3 -= 1);  
}

/* Устанавливаем текущий слайд */
function currentSlide3(n) {
    showSlides3(slideIndex3 = n);
}

/* Функция перелистывания */
function showSlides3(n) {
    let i;
    let slides = document.getElementsByClassName("item3");
    
    if (n > slides.length) {
      slideIndex3 = 1
    }
    if (n < 1) {
        slideIndex3 = slides.length
    }
  
  /* Проходим по каждому слайду в цикле for */
    for (let slide of slides) {
        slide.style.display = "none";
    }   
    slides[slideIndex3 - 1].style.display = "block"; 
}