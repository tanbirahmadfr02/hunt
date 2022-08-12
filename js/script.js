
$('.banner_slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:true,
  prevArrow:'<i class="fa-solid fa-circle-arrow-left prevarrow"></i>',
  nextArrow:'<i class="fa-solid fa-circle-arrow-right nextarrow"></i>',
});
//  ========================banner part end ==================== 
// ================portfolio part start ============ 
$('.venobox').venobox();
// ================portfolio part end ============    
// ===========service part start ==============
$('.slider_main').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows:true,
  vertical:true,
  centerMode:true,
  centerPadding:0,
  autoplay:false,
  focusOnSelect:true,
  prevArrow:'<i class="fa-solid fa-angle-up toparrow"></i>',
  nextArrow:'<i class="fa-solid fa-angle-down bottomarrow"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      }
    }
  ]
});
// ============service part end ============
// ============testimonial part start ============
$('.testimonial_img_slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows:true,
  vertical:true,
  centerMode:true,
  centerPadding:0,
  autoplay:false,
  fade:false,
  asNavFor:".testimonial_text_slider",
  focusOnSelect:true,
  prevArrow:'<i class="fa-solid fa-angle-up uparrow"></i>',
  nextArrow:'<i class="fa-solid fa-angle-down downarrow"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        dots: false,
        slidesToScroll: 1,
      }
    }
  ]
});
$('.testimonial_text_slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  vertical:true,
  autoplay:false,
  asNavFor:".testimonial_img_slider",
  fade: false,
 
});
// ============testimonial part end ============
// =======counter part start ========
$('.counter').counterUp();
// =======counter part end ========
// ==========team part start ============
$('.venobox').venobox();
// ==========team part end ============
// ==========logo slider part start ==========
$('.item_main').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows:false,
  autoplay:true,
  focusOnSelect:true,
  centerMode:true,
  centerPadding:0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      }
    }
  ]
});
// ==========logo slider part end ==========
// =========sticky menu part ========
var main_menu = document.getElementById("main_menu");
window.addEventListener("scroll",function(){
main_menu.classList.toggle("sticky",window.scrollY > 100);
})
// =========sticky menu part ========
 // ========back to top part ======
 var back_to_top = document.querySelector(".back_to_top")

 window.addEventListener("scroll",function(){
 
   back_to_top.classList.toggle("bottom_to_top",window.scrollY > 150)
 })
 // ========back to top part ======