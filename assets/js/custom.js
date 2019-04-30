$(document).ready(function () {
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

  $('#sliders').on('changed.owl.carousel', function (e) {
    let position = e.item.index;
    $('#titleSlider').trigger('to.owl.carousel', position);

    $('.overlay').css({
      backgroundColor: 'rgb(' +
        pallette[e.item.index][0][0] +
        ',' +
        pallette[e.item.index][0][1] +
        ',' +
        pallette[e.item.index][0][2] +
        ')'
    });
    $('.overlay2').css({
      backgroundColor: 'rgb(' +
        pallette[e.item.index][1][0] +
        ',' +
        pallette[e.item.index][1][1] +
        ',' +
        pallette[e.item.index][1][2] +
        ')'
    });
  });

  $('#titleSlider').on('changed.owl.carousel', function (e) {
    let position = e.item.index;
    $('#sliders').trigger('to.owl.carousel', position);
  });

  $();
  var $img = $('.thiefColor');
  var pallette = [];
  $img.on('load', function () {
    for (let index = 0; index < $img.length; index++) {
      var colorThief = new ColorThief();
      pallette[index] = colorThief.getPalette($img.get(index), 2);
    }
    $('.overlay').css({
      backgroundColor: 'rgb(' +
        pallette[0][0][0] +
        ',' +
        pallette[0][0][1] +
        ',' +
        pallette[0][0][2] +
        ')'
    });
    $('.overlay2').css({
      backgroundColor: 'rgb(' +
        pallette[0][1][0] +
        ',' +
        pallette[0][1][1] +
        ',' +
        pallette[0][1][2] +
        ')'
    });
  });

  $('.header > .row .search > img').on('click', function () {
    $('.container').addClass('perspective');
    $('.searchBox').addClass('active');
  });
  $('.searchBox .close').on('click', function () {
    $('.container').removeClass('perspective');
    $('.searchBox').removeClass('active');
  });

  $('.megamenu.megaproduct .link .column').hover(
    function () {
      $('.megamenu.megaproduct .heroproduct img').attr(
        'src',
        $(this).attr('data-src')
      );
    },
    function () {}
  );
  $('.header > .row .logo .menuIcon__button').on('click', function () {
    $('.header > .row .nav').toggleClass('active');
    $('.header > .row .search').toggleClass('active');
  });

  $('#image').mousemove(function () {
    var img, glass, w, h, bw;

    img = $('#image');

    glass = document.createElement('div');
    glass.setAttribute('class', 'mag-glass');
    img.parentElement.insertBefore(glass, img);
    glass.style.backgroundImage = 'url("' + img.src + '")';
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (img.width * zoom) + 'px' + (img.height * zoom) + 'px';

    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;

    glass.addEventListener('mousemove', moveMag);
    img.addEventListener('mousemove', moveMag);

    glass.addEventListener('touchmove', moveMag);
    img.addEventListener('touchmove', moveMag);

    function moveMag(el) {
      var x, y, pos;
      el.preventDefault();
      pos = getCursorPos(el);
      x = pos.x;
      y = pos.y;

      if (x > img.width - (w / zoom)) {
        x = img.width - (w / zoom);
      }
      if (x < img.width) {
        x = w / zoom;
      }
      if (y > img.height - (h / zoom)) {
        y = img.height - (h / zoom);
      }
      if (y < img.height) {
        y = h / zoom;
      }

      glass.style.left = (x - w) + 'px';
      glass.style.top = (y - h) + 'px';
      glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
    }
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