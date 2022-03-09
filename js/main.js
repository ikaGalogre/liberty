//   burgermenu

let navbarlinks=document.getElementById('navbarlinks');
let toggleButton =document.getElementById('togglebutton');

togglebutton.addEventListener('click', function(){
    navbarlinks.classList.toggle('active');
})

// slider
$(document).ready(function(){
    $('.first_block').slick({
        slidesToShow: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
  });
