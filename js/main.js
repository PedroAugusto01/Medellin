let unit_prod = {
    fal: 20,
    g36: 19,
    hk: 18,
    m4a4: 16,
    mtar: 10,
    ak47: 12,
    navy: 8,
    machine: 5,
    five: 2
};

var valuePorcent = 0;
var isFarm = false;

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
    disableOrEnableCalcFarmFields(true);

    document.getElementById("table_fal").innerText = unit_prod.fal;
    document.getElementById("table_g36").innerText = unit_prod.g36;
    document.getElementById("table_hk").innerText = unit_prod.hk;
    document.getElementById("table_m4a4").innerText = unit_prod.m4a4;
    document.getElementById("table_mtar").innerText = unit_prod.mtar;
    document.getElementById("table_ak47").innerText = unit_prod.ak47;
    document.getElementById("table_navy").innerText = unit_prod.navy;
    document.getElementById("table_machine").innerText = unit_prod.machine;
    document.getElementById("table_five").innerText = unit_prod.five;

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
        return false;
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
        dots: false,
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

function disableOrEnableCalcFarmFields(disabled = Boolean) {
    document.getElementById("qty_fal").disabled = disabled;
    document.getElementById("qty_g36").disabled = disabled;
    document.getElementById("qty_hk").disabled = disabled;
    document.getElementById("qty_m4a4").disabled = disabled;
    document.getElementById("qty_mtar").disabled = disabled;
    document.getElementById("qty_ak47").disabled = disabled;
    document.getElementById("qty_navy").disabled = disabled;
    document.getElementById("qty_machine").disabled = disabled;
    document.getElementById("qty_five").disabled = disabled;

    document.getElementById("price_fal").disabled = disabled;
    document.getElementById("price_g36").disabled = disabled;
    document.getElementById("price_hk").disabled = disabled;
    document.getElementById("price_m4a4").disabled = disabled;
    document.getElementById("price_mtar").disabled = disabled;
    document.getElementById("price_ak47").disabled = disabled;
    document.getElementById("price_navy").disabled = disabled;
    document.getElementById("price_machine").disabled = disabled;
    document.getElementById("price_five").disabled = disabled;
}

function calculateTotal(isFarm = false) {
    var totalFarm = 0;
    var totalMuni = 0;
    self.isFarm = isFarm;

    if (isFarm == true) {
        let returnFarmToMuni = calculateFarmToMuni();
        totalFarm = returnFarmToMuni[0];
        totalMuni = returnFarmToMuni[1];
    } else {
        let returnMuniToFarm = calculateMuniToFarm();
        totalFarm = returnMuniToFarm[0];
        totalMuni = returnMuniToFarm[1];
    }

    $("#total_value_farm").text(totalFarm);
    $("#total_value_muni").text(totalMuni);

}

function calculateFarmToMuni() {
    let item_price = {}
    let valueFal = parseInt($("#qty_fal").val() , 10);
    let valueG36 = parseInt($("#qty_g36").val() , 10);
    let valueHk = parseInt($("#qty_hk").val() , 10);
    let valueM4a4 = parseInt($("#qty_m4a4").val() , 10);
    let valueMtar = parseInt($("#qty_mtar").val() , 10);
    let valueAk47 = parseInt($("#qty_ak47").val() , 10);
    let valueNavy = parseInt($("#qty_navy").val() , 10);
    let valueMachine = parseInt($("#qty_machine").val() , 10);
    let valueFive = parseInt($("#qty_five").val() , 10);

    item_price.fal = parseInt(((valueFal * valuePorcent) / unit_prod.fal), 10)
    $("#price_fal").val(item_price.fal);

    item_price.g36 = parseInt(((valueG36 * valuePorcent) / unit_prod.g36), 10)
    $("#price_g36").val(item_price.g36);

    item_price.hk = parseInt(((valueHk * valuePorcent) / unit_prod.hk), 10)
    $("#price_hk").val(item_price.hk);

    item_price.m4a4 = parseInt(((valueM4a4 * valuePorcent) / unit_prod.m4a4), 10)
    $("#price_m4a4").val(item_price.m4a4);

    item_price.mtar = parseInt(((valueMtar * valuePorcent) / unit_prod.mtar), 10)
    $("#price_mtar").val(item_price.mtar);

    item_price.ak47 = parseInt(((valueAk47 * valuePorcent) / unit_prod.ak47), 10)
    $("#price_ak47").val(item_price.ak47);

    item_price.navy = parseInt(((valueNavy * valuePorcent) / unit_prod.navy), 10)
    $("#price_navy").val(item_price.navy);

    item_price.machine = parseInt(((valueMachine * valuePorcent) / unit_prod.machine), 10)
    $("#price_machine").val(item_price.machine);

    item_price.five = parseInt(((valueFive * valuePorcent) / unit_prod.five), 10)
    $("#price_five").val(item_price.five);

    let totalFarm = item_price.fal + item_price.g36 + item_price.hk + item_price.m4a4 + item_price.mtar + item_price.ak47 + item_price.navy  + item_price.machine + item_price.five;
    let totalMuni = valueFal + valueG36 + valueHk + valueM4a4 + valueMtar + valueAk47 + valueNavy + valueMachine + valueFive;

    return [totalMuni, totalFarm];
}

function calculateMuniToFarm() {
    let item_price = {}
    let valueFal = parseInt($("#price_fal").val() , 10);
    let valueG36 = parseInt($("#price_g36").val() , 10);
    let valueHk = parseInt($("#price_hk").val() , 10);
    let valueM4a4 = parseInt($("#price_m4a4").val() , 10);
    let valueMtar = parseInt($("#price_mtar").val() , 10);
    let valueAk47 = parseInt($("#price_ak47").val() , 10);
    let valueNavy = parseInt($("#price_navy").val() , 10);
    let valueMachine = parseInt($("#price_machine").val() , 10);
    let valueFive = parseInt($("#price_five").val() , 10);

    item_price.fal = parseInt(((valueFal * unit_prod.fal) / valuePorcent), 10)
    $("#qty_fal").val(item_price.fal);

    item_price.g36 = parseInt(((valueG36 * unit_prod.g36) / valuePorcent), 10)
    $("#qty_g36").val(item_price.g36);

    item_price.hk = parseInt(((valueHk * unit_prod.hk) / valuePorcent), 10)
    $("#qty_hk").val(item_price.hk);

    item_price.m4a4 = parseInt(((valueM4a4 * unit_prod.m4a4) / valuePorcent), 10)
    $("#qty_m4a4").val(item_price.m4a4);

    item_price.mtar = parseInt(((valueMtar * unit_prod.mtar) / valuePorcent), 10)
    $("#qty_mtar").val(item_price.mtar);

    item_price.ak47 = parseInt(((valueAk47 * unit_prod.ak47) / valuePorcent), 10)
    $("#qty_ak47").val(item_price.ak47);

    item_price.navy = parseInt(((valueNavy * unit_prod.navy) / valuePorcent), 10)
    $("#qty_navy").val(item_price.navy);

    item_price.machine = parseInt(((valueMachine * unit_prod.machine) / valuePorcent), 10)
    $("#qty_machine").val(item_price.machine);

    item_price.five = parseInt(((valueFive * unit_prod.five) / valuePorcent), 10)
    $("#qty_five").val(item_price.five);

    let totalMuni = item_price.fal + item_price.g36 + item_price.hk + item_price.m4a4 + item_price.mtar + item_price.ak47 + item_price.navy  + item_price.machine + item_price.five;
    let totalFarm = valueFal + valueG36 + valueHk + valueM4a4 + valueMtar + valueAk47 + valueNavy + valueMachine + valueFive;

    return [totalMuni, totalFarm];
}

function cbChange(obj) {
    var cbs = document.getElementsByClassName("cb");
    var text = document.getElementById("text");
    for (var i = 0; i < cbs.length; i++) {
        cbs[i].checked = false;
    }
    obj.checked = true;
    disableOrEnableCalcFarmFields(false);

    switch (obj.id) {
        case "opt0":
            text.innerText = "Valor selecionado: Membro - 20%"
            valuePorcent = (1 - ((parseInt(obj.name))/100))
            console.log(valuePorcent)
            break;
        case "opt1":
            text.innerText = "Valor selecionado: Membro - 15%"
            valuePorcent = (1 - ((parseInt(obj.name))/100))
            console.log(valuePorcent)
            break;
        case "opt2":
            text.innerText = "Valor selecionado: Recrutador - 10%"
            valuePorcent = (1 - ((parseInt(obj.name))/100))
            console.log(valuePorcent)
            break;
        case "opt3":
            text.innerText = "Valor selecionado: Elite - 8%"
            valuePorcent = (1 - ((parseInt(obj.name))/100))
            console.log(valuePorcent)
            break;
        case "opt4":
            text.innerText = "Valor selecionado: Gerente - 5%"
            valuePorcent = (1 - ((parseInt(obj.name))/100))
            console.log(valuePorcent)
            break;
        case "opt5":
            text.innerText = "Valor selecionado: Sub-Líder - 3%"
            valuePorcent = (1 - ((parseInt(obj.name))/100))
            console.log(valuePorcent)
            break;
        case "opt6":
            text.innerText = "Valor selecionado: Líder - 0%"
            valuePorcent = (1 - ((parseInt(obj.name))/100))
            console.log(valuePorcent)
            break;
        default:
            //What ever you want do to
            break;
    }
    calculateTotal(isFarm);
}