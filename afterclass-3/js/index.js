//creamos un evento que va a ejecutar el carrousel cunado el DOM este cargado completamente.



    //seleccionar partes de carrousel slide
    const carousel = document.querySelector('.carousel');
    const SLIDE = document.querySelectorAll('.slide');

    //seleccionamos los botones

    const prevBtn = document.getElementById('anteriorBtn');
    const nextBtn = document.getElementById('siguienteBtn');

    //contador de imagen

    let imagenCero = 0;

    //sumar una imagen
    nextBtn.addEventListener('click', handleNextClick);
    prevBtn.addEventListener('click', handlePrevClick);
  
    function handleNextClick() {
        imagenCero = (imagenCero + 1) % SLIDE.length;
      updateCarousel();
    }
  
    function handlePrevClick() {
        imagenCero = (imagenCero - 1 + SLIDE.length) % SLIDE.length;
      updateCarousel();
    }
  
    function updateCarousel() {
      carousel.style.transform = `translateX(${-imagenCero * 100}%)`;
    }
  
    function autoSlide() {
      handleNextClick();
    }
    
    
    // funcion para que se muevan solas
    setInterval(autoSlide, 3000);

//funcion que nos cambie las imagenes

