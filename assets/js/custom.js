$(document).ready(function() {
  $('#sliders').owlCarousel({
    slideSpeed: 300,
    navSpeed: 1000,
    singleItem: true,
    nav: false,
    rewindSpeed: 500,
    navText: [
      "<img src='./assets/images/left-arrow.jpg'>",
      "<img src='./assets/images/right-arrow.jpg'>"
    ],
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
  $('#titleSlider').owlCarousel({
    slideSpeed: 300,
    navSpeed: 1000,
    singleItem: true,
    animateIn: 'fadeIn', // add this
    animateOut: 'fadeOut', // and this
    nav: true,
    dots: true,
    rewindSpeed: 500,
    navText: [
      "<img src='./assets/images/left-arrow.jpg'>",
      "<img src='./assets/images/right-arrow.jpg'>"
    ],
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

  $('#sliders').on('changed.owl.carousel', function(e) {
    let position = e.item.index;
    $('#titleSlider').trigger('to.owl.carousel', position);

    $('.overlay').css({
      backgroundColor:
        'rgb(' +
        pallette[e.item.index][0][0] +
        ',' +
        pallette[e.item.index][0][1] +
        ',' +
        pallette[e.item.index][0][2] +
        ')'
    });
    $('.overlay2').css({
      backgroundColor:
        'rgb(' +
        pallette[e.item.index][1][0] +
        ',' +
        pallette[e.item.index][1][1] +
        ',' +
        pallette[e.item.index][1][2] +
        ')'
    });
  });

  $('#titleSlider').on('changed.owl.carousel', function(e) {
    let position = e.item.index;
    $('#sliders').trigger('to.owl.carousel', position);
  });

  $();
  var $img = $('.thiefColor');
  var pallette = [];
  $img.on('load', function() {
    for (let index = 0; index < $img.length; index++) {
      var colorThief = new ColorThief();
      pallette[index] = colorThief.getPalette($img.get(index), 2);
    }
    $('.overlay').css({
      backgroundColor:
        'rgb(' +
        pallette[0][0][0] +
        ',' +
        pallette[0][0][1] +
        ',' +
        pallette[0][0][2] +
        ')'
    });
    $('.overlay2').css({
      backgroundColor:
        'rgb(' +
        pallette[0][1][0] +
        ',' +
        pallette[0][1][1] +
        ',' +
        pallette[0][1][2] +
        ')'
    });
  });

  $('.header > .row .search > img').on('click',function () {
    $('.container').addClass('perspective');
    $('.searchBox').addClass('active');
  });
  $('.searchBox .close').on('click',function () {
    $('.container').removeClass('perspective');
    $('.searchBox').removeClass('active');
  });
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
