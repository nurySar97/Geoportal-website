$(function(){
  
  let navbar = $(".navbar");
  let navTitle = $('.nav__title')
  let navLogo = $(".nav__logo")
  let scrollTop = $(window).scrollTop()


  $(window).on("scroll",function() {
    scrollPos = $(this).scrollTop()


    if(scrollPos >= 80) {
      navbar.css({"position":"fixed","backgroundColor":"rgba(0, 0, 0, 0.1)"})
      navTitle.css({"fontSize":"24px"})
      navLogo.css({"width":"33.333px","height":"33.333px"})
    
    }else {
      navbar.css({"position":"absolute","backgroundColor":"transparent"})
      navTitle.css({"fontSize":"36px"})
    }

  })

})