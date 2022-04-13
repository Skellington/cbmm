"use strict";
var ativaMenu, animaCol, ativaItemFlutuante;
document.querySelector(".nav-princ") && (ativaMenu = function() {
    function e() {
        t.classList.toggle("ativo"), a.classList.toggle("ativo")
    }
    var t = document.querySelector(".menu-hamburguer"),
        a = document.querySelector(".items-menu");
    t.addEventListener("click", e)
})(), document.querySelector(".caixa-flutuante") && (ativaItemFlutuante = function() {
    function a() {
        o.forEach(function(e) {
            return e.classList.remove("ativo")
        })
    }
    var o = document.querySelectorAll(".caixa-flutuante li a"),
        n = document.querySelectorAll(".main-content h3.main-title");

    function t(e) {
        e.preventDefault();
        e = e.currentTarget.getAttribute("href");
        document.querySelector(e).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }
    o.forEach(function(e) {
        e.addEventListener("click", t)
    }), n.forEach(function(e, t) {
        e = e.getBoundingClientRect().top;
        e < 300 ? (a(), o[t].classList.add("ativo")) : e < 0 ? a() : 300 < e && 500 < n[0].getBoundingClientRect().top && document.querySelectorAll(".caixa-flutuante li a")[0].classList.remove("ativo")
    })
}, window.addEventListener("scroll", animaCol = function() {
    var e = document.querySelector(".main-content"),
        t = document.querySelector(".navegacao-pags"),
        a = document.querySelector(".caixa-flutuante"),
        e = e.getBoundingClientRect().top;
    e < 260 ? (a.classList.add("fixa"), t.classList.add("fixa")) : 100 < e && (a.classList.remove("fixa"), t.classList.remove("fixa"))
}), window.addEventListener("scroll", ativaItemFlutuante)), 
    $(".owl-carousel-main").owlCarousel({
    loop: !1,
    margin: 18,
    nav: !1,
    stagePadding: 8,
    responsive: {
        0: {
            dots: !0,
            items: 1
        },
        600: {
            items: 3
        },
        1e3: {
            dots: !1,
            items: 4
        },
        1024: {
            dots: !1,
            items: 5
        },
    }
}), $(".owl-carousel-relat").owlCarousel({
    loop: !1,
    nav: !1,
    responsive: {
        0: {
            items: 1,
            autoplay: !0,
            autoplayTimeout: 1e3,
            autoplayHoverPause: !0
        },
        600: {
            items: 3
        },
        1024: {
            margin: 24
        },
        1320: {
            margin: 48
        }
    }
}), $(".play").on("click", function() {
    owl.trigger("play.owl.autoplay", [1e3])
}), $(".stop").on("click", function() {
    owl.trigger("stop.owl.autoplay")
});

$(document).ready(function(){
$('.caixa-flutuante a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
        
    $('html, body').animate({ 
      scrollTop: targetOffset - 100
    }, 500);
  });
 });


$(document).ready(function(){
    $("#open_info").click(function () {
      if ($(".infograficos").hasClass("expanded")) {
        $(".infograficos").removeClass("expanded");
        $(this).removeClass("active");
      } else {
        $(".infograficos").addClass("expanded");
        $(this).addClass("active");
      }
  });
});