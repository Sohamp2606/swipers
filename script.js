


// -->>  swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    
    loop: true,

    spaceBetween: 1,

    slidesPerView: 4.1, // Number of slides per view
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
   
  });