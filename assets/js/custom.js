$(document).ready(function () {
  $('#sliders').owlCarousel({
    slideSpeed: 300,
    navSpeed: 1000,
    singleItem: true,
    items: 1,
    stagePadding: 0,
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
    items: 1,
    stagePadding: 0,
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

  $(".descripCont .description .images .sub-img img").click(function () {
    var a = $(this).attr('src');
    var b = $("#zoom_01").attr('src');
    $(this).attr('src', b);
    $(this).parent().attr('data-zoom-image', b);
    $(this).parent().attr('data-image', b);
    $(this).parent().attr('href', b);
    $("#zoom_01").attr('src', a);
    $("#zoom_01").attr('data-zoom-image', a);
    $("#zoom_01").attr('data-image', a);
    $(".zoomLens").css({
      backgroundImage: "url('" + a + "')",
      backgroundColor: '#fff'
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    var stickymenu = document.getElementById("fixedmenu");
    var stickymenuoffset = stickymenu.offsetTop;

    window.addEventListener("scroll", function (e) {
      requestAnimationFrame(function () {
        if (window.pageYOffset > stickymenuoffset) {
          stickymenu.classList.add('sticky');
        } else {
          stickymenu.classList.remove('sticky');
        }
      })
    });
  });

  $('.container > .row .form .form-panel .titles .title').on('click', function () {

    if ($('.container > .row .form .form-panel .titles .title').has('active')) {
      $('.container > .row .form .form-panel .titles .title').removeClass('active');
      $('.' + $(this).attr('data-src')).addClass('active');
    }
    $('.container .head >.row p').html($(this).attr('data-src') + ' Form');
    $('#Register').css({
      display: 'none'
    });
    $('#Replacement').css({
      display: 'none'
    });
    $('#' + $(this).attr('data-src')).css({
      display: 'block',
      boxShadow: 'none'
    });
  });

  $('.container > .row .offersCont .title').on('click', function () {
    if ($('.container > .row .offersCont').has('active')) {
      $('.container > .row .offersCont ').removeClass('active').addClass('deactive');
    }
    $('.' + $(this).attr('data-src')).removeClass('deactive').addClass('active');
  });

  $(function () {
    $("#Stores .province path").click(function (e) {
      e.preventDefault();
      $('.table').hide(0);
      $("html, body").animate({
        scrollTop: $(document).height()
      }, 1000);
      $("#state-" + $(this).attr("value")).show();
    });
    $("#Stores .province li").click(function (e) {
      e.preventDefault();
      $('.table').hide(0);
      $("html, body").animate({
        scrollTop: $("#gohere").offset().top
      }, 1000);
      $("#" + $(this).attr("value")).show();
    });

    $("#Deligations .province path").click(function (e) {
      e.preventDefault();
      $('.table2').hide(0);
      $("html, body").animate({
        scrollTop: $(document).height()
      }, 1000);
      $("#dstate-" + $(this).attr("value")).show();
    });

    $("#Deligations .province li").click(function (e) {
      e.preventDefault();
      $('.table2').hide(0);
      $("html, body").animate({
        scrollTop: $("#gohere2").offset().top
      }, 1000);
      $("#" + $(this).attr("value")).show();
    });
  });

  $('.S-DCont .toggle .choice').on('click', function () {
    $('.container .head >.row p').html($(this).attr('value'));
    $('.S-DCont .toggle #flap .content').html($(this).attr('value'));

    $('#Stores').css({
      display: 'none'
    });
    $('#Deligations').css({
      display: 'none'
    });
    $('#' + $(this).attr('value')).css({
      display: 'block'
    });
  });

  if ($('.S-DCont .toggle .choice').prop('checked')) {
    $('#Stores').css({
      display: 'block'
    });
    $('#Deligates').css({
      display: 'none'
    });
  }

  $('.container .AFSCont >.row .tabs .tab').on('click', function () {

    if ($('.container .AFSCont >.row .tabs ').has('select')) {
      $('.container .AFSCont >.row .tabs .tab').removeClass('select');
      $('.' + $(this).attr('value')).addClass('select');
    }
      $('.container .AFSCont >.row .forms .forms-title p').html($(this).attr('value'));
    $('#Waranty').css({
      display: 'none'
    });
    $('#After-Service-Centers').css({
      display: 'none'
    });
    $('#Replacement').css({
      display: 'none'
    });
    $('#Cunsumer-Service').css({
      display: 'none'
    });
    $('#Service-For-Registered').css({
      display: 'none'
    });
    $('#' + $(this).attr('value')).css({
      display: 'flex'
    });
  });

});