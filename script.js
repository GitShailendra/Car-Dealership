window.scroll = () =>{
    if(window.screenY>0){
        document.querySelector(".header").classList.add("active");
    }else{
        document.querySelector(".header").classList.remove("active");

    }
}
document.querySelector('#login-btn').onclick = () =>{
    document.querySelector('.login-from-container').classList.toggle('active');
}
document.querySelector('#close-login-form').onclick = () =>{
    document.querySelector('.login-from-container').classList.remove('active');
}

document.querySelector('.home').onmousemove = (e) =>{
    document.querySelectorAll('.home-parallex').forEach(elm =>{
        let speed = elm.getAttribute('data-speed');
        let x = (window.innerWidth - e.pageX * speed) /90;
        let y = (window.innerHeight - e.pageY * speed) /90;
        elm.style.transform = `translateX(${y}px) translateY(${x}px)`
    })

}
document.querySelector('.home').onmouseleave = () =>{
    document.querySelectorAll('.home-parallex').forEach(elm =>{
        
        elm.style.transform = `translateX(0px) translateY(0px)`
    })

}
var swiper = new Swiper(".vehicle-slidebar", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true, 
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });


var swiper = new Swiper(".featured-slidebar", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop:true, 
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
      delay: 5000,
      disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
var swiper = new Swiper(".reviews-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop:true, 
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
      delay: 5000,
      disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});