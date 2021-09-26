/* Устанавливаем индекс слайда по умолчанию */
let slideIndex4 = 1;
showSlides4(slideIndex4);

/* Увеличиваем индекс на 1 — показываем следующий слайд*/
function nextSlide4() {
    showSlides4(slideIndex4 += 1);
}

/* Уменьшает индекс на 1 — показываем предыдущий слайд*/
function previousSlide4() {
    showSlides4(slideIndex4 -= 1);  
}

/* Устанавливаем текущий слайд */
function currentSlide4(n) {
    showSlides4(slideIndex4 = n);
}

/* Функция перелистывания */
function showSlides4(n) {
    let i;
    let slides = document.getElementsByClassName("item4");
    
    if (n > slides.length) {
      slideIndex4 = 1
    }
    if (n < 1) {
        slideIndex4 = slides.length
    }
  
  /* Проходим по каждому слайду в цикле for */
    for (let slide of slides) {
        slide.style.display = "none";
    }   
    slides[slideIndex4 - 1].style.display = "block"; 
}