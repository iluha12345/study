/* Устанавливаем индекс слайда по умолчанию */
let slideIndex1 = 1;
showSlides1(slideIndex1);

/* Увеличиваем индекс на 1 — показываем следующий слайд*/
function nextSlide1() {
    showSlides1(slideIndex1 += 1);
}

/* Уменьшает индекс на 1 — показываем предыдущий слайд*/
function previousSlide1() {
    showSlides1(slideIndex1 -= 1);  
}

/* Устанавливаем текущий слайд */
function currentSlide1(n) {
    showSlides1(slideIndex1 = n);
}

/* Функция перелистывания */
function showSlides1(n) {
    let i;
    let slides = document.getElementsByClassName("item1");
    
    if (n > slides.length) {
      slideIndex1 = 1
    }
    if (n < 1) {
        slideIndex1 = slides.length
    }
  
  /* Проходим по каждому слайду в цикле for */
    for (let slide of slides) {
        slide.style.display = "none";
    }   
    slides[slideIndex1 - 1].style.display = "block"; 
}