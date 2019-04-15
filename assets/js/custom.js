$(document).ready(function () {
  $('#owl-carousel').owlCarousel({
    rtl: true,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 2
      }
    }
  });
  $('#sliders').owlCarousel({
    rtl: true,
    loop: true,
    slideSpeed: 300,
    paginationSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 4000,
    singleItem: true,
    pagination: false,
    rewindSpeed: 500,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  $('#relatedSlider').owlCarousel({
    rtl: true,
    loop: true,
    margin: 50,
    center: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    dots: true,
    nav: true,
    /* navText: ["<img src='myprevimage.png'>", "<img src='mynextimage.png'>"], */
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 4
      },
      1000: {
        items: 5
      }
    }
  });
  $('#faveSlider').owlCarousel({
    // autoWidth:true,
    // stagePadding:15,
    rtl: true,
    loop: true,
    margin: 0,
    // center: true, 
    autoplay: false,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    navText: ["<img src='assets/images/left-arrow.png'>", "<img src='assets/images/right-arrow.png'>"], 
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      },
      1600: {
        items: 5
      }
    }
  });
  if ($('.topRowBanner')[0]) {
    document.querySelector('.header').classList.add('topBannerExist');
    document
      .querySelector('.heroImage')
      .classList.add('heroImageWithTopBanner');
  }
});

/* var stickymenu = document.getElementById("fixedmenu");
    var stickymenuoffset = stickymenu.offsetTop;
    
    window.addEventListener("scroll", function(e){
        requestAnimationFrame(function(){
            if (window.pageYOffset > stickymenuoffset){
                //stickymenu.classList.add('sticky');
                stickymenu.style.position = "fixed";
            }
            else{
                //stickymenu.classList.remove('sticky')
                stickymenu.style.position = "relative";
            }
        })
    }) */