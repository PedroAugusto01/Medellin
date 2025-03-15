(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top');
        } else {
            $('.nav-bar').removeClass('sticky-top');
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return sniperse;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: sniperse,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    });

})(jQuery);

function calculateTotal() {
    let BRL = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    let item_price = {}
    let pricesniper = parseInt($("#price_sniper").val() , 10);
    let priceG36 = parseInt($("#price_g36").val() , 10);
    let priceram = parseInt($("#price_ram").val() , 10);
    let priceM4a4 = parseInt($("#price_m4a4").val() , 10);
    let priceMpx = parseInt($("#price_mpx").val() , 10);
    let pricescah = parseInt($("#price_scah").val() , 10);
    let priceMtar = parseInt($("#price_mtar").val() , 10);
    let priceAk47 = parseInt($("#price_ak47").val() , 10);
    let pricemp9 = parseInt($("#price_mp9").val() , 10);
    let priceMachine = parseInt($("#price_machine").val() , 10);
    let pricePistol = parseInt($("#price_50").val() , 10);
    let priceFive = parseInt($("#price_five").val() , 10);

    let qtdsniper = parseInt($("#qtd_sniper").val() , 10);
    let qtdG36 = parseInt($("#qtd_g36").val() , 10);
    let qtdram = parseInt($("#qtd_ram").val() , 10);
    let qtdM4a4 = parseInt($("#qtd_m4a4").val() , 10);
    let qtdMpx = parseInt($("#qtd_mpx").val() , 10);
    let qtdscah = parseInt($("#qtd_scah").val() , 10);
    let qtdMtar = parseInt($("#qtd_mtar").val() , 10);
    let qtdAk47 = parseInt($("#qtd_ak47").val() , 10);
    let qtdmp9 = parseInt($("#qtd_mp9").val() , 10);
    let qtdMachine = parseInt($("#qtd_machine").val() , 10);
    let qtdPistol = parseInt($("#qtd_50").val() , 10);
    let qtdFive = parseInt($("#qtd_five").val() , 10);

    let totalsniper = document.getElementById("sniperTotalMuniCalc");
    let totalG36 = document.getElementById("g36TotalMuniCalc");
    let totalram = document.getElementById("ramTotalMuniCalc");
    let totalM4a4 = document.getElementById("m4a4TotalMuniCalc");
    let totalMpx = document.getElementById("mpxTotalMuniCalc");
    let totalscah = document.getElementById("scahTotalMuniCalc");
    let totalMtar = document.getElementById("mtarTotalMuniCalc");
    let totalAk47 = document.getElementById("ak47TotalMuniCalc");
    let totalmp9 = document.getElementById("mp9TotalMuniCalc");
    let totalMachine = document.getElementById("machineTotalMuniCalc");
    let totalPistol = document.getElementById("50TotalMuniCalc");
    let totalFive = document.getElementById("fiveTotalMuniCalc");


    item_price.sniper = pricesniper * qtdsniper;
    totalsniper.innerText = `${BRL.format(item_price.sniper)}`

    item_price.g36 = priceG36 * qtdG36;
    totalG36.innerText = `${BRL.format(item_price.g36)}`

    item_price.ram = priceram * qtdram;
    totalram.innerText = `${BRL.format(item_price.ram)}`

    item_price.m4a4 = priceM4a4 * qtdM4a4;
    totalM4a4.innerText = `${BRL.format(item_price.m4a4)}`

    item_price.mpx = priceMpx * qtdMpx;
    totalMpx.innerText = `${BRL.format(item_price.mpx)}`

    item_price.scah = pricescah * qtdscah;
    totalscah.innerText = `${BRL.format(item_price.scah)}`

    item_price.mtar = priceMtar * qtdMtar;
    totalMtar.innerText = `${BRL.format(item_price.mtar)}`

    item_price.ak47 = priceAk47 * qtdAk47;
    totalAk47.innerText = `${BRL.format(item_price.ak47)}`

    item_price.mp9 = pricemp9 * qtdmp9;
    totalmp9.innerText = `${BRL.format(item_price.mp9)}`

    item_price.machine = priceMachine * qtdMachine;
    totalMachine.innerText = `${BRL.format(item_price.machine)}`

    item_price.pistol = pricePistol * qtdPistol;
    totalPistol.innerText = `${BRL.format(item_price.pistol)}`

    item_price.five = priceFive * qtdFive;
    totalFive.innerText = `${BRL.format(item_price.five)}`

    let totalQuantidade = qtdsniper + qtdG36 + qtdram + qtdMpx + qtdM4a4 + qtdscah + qtdMtar + qtdAk47 + qtdmp9 + qtdMachine + qtdPistol + qtdFive;
    let totalPrice = item_price.sniper + item_price.g36 + item_price.ram + item_price.mpx + item_price.m4a4 + item_price.scah + item_price.mtar + item_price.ak47 + item_price.mp9  + item_price.machine + item_price.pistol + item_price.five;

    $("#total_value_quantidade").text(totalQuantidade);
    $("#total_value").text(BRL.format(totalPrice));
}