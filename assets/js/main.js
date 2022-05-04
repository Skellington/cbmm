"use strict";
var ativaMenu, animaCol;
document.querySelector(".nav-princ") &&
    (ativaMenu = function () {
        function t() {
            o.classList.toggle("ativo"), e.classList.toggle("ativo");
        }
        var o = document.querySelector(".menu-hamburguer"),
            e = document.querySelector(".items-menu");
        ["touchstart", "click"].forEach(function (e) {
            o.addEventListener(e, t);
        });
    })(),
    document.querySelector(".caixa-flutuante") &&
        window.addEventListener(
            "scroll",
            (animaCol = function () {
                var e = document.querySelector(".main-content"),
                    t = document.querySelector(".caixa-flutuante"),
                    e = e.getBoundingClientRect().top;
                e < 70 ? t.classList.add("fixa") : 70 < e && t.classList.remove("fixa");
            })
        ),
    $(".owl-carousel-main").owlCarousel({ loop: !1, margin: 24, nav: !1, responsive: { 0: { items: 1.2 }, 600: { items: 3 }, 1e3: { items: 4 } } }),
    $(".owl-carousel-relat").owlCarousel({ loop: !1, nav: !1, responsive: { 0: { items: 1, autoplay: !0, autoplayTimeout: 1e3, autoplayHoverPause: !0 }, 600: { items: 3 }, 1024: { margin: 24 }, 1320: { margin: 48 } } }),
    $(".play").on("click", function () {
        owl.trigger("play.owl.autoplay", [1e3]);
    }),
    $(".stop").on("click", function () {
        owl.trigger("stop.owl.autoplay");
    });
